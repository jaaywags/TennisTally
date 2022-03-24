import WatchKit
import WatchConnectivity
import Foundation

//let sharedCommunicationHelper = CommunicationHelper()

struct Score: Codable {
  var homeTeamCurrentGame: String = "LOVE"
  var visitorTeamCurrentGame: String = "LOVE"
  var homeTeamGames: Int = 0
  var visitorTeamGames: Int = 0
  var homeTeamSets: Int = 0
  var visitorTeamSets: Int = 0
}

struct CloseSet: Codable {
  var isHomeWinner: Bool = true
  var home: Int = 0
  var visitor: Int = 0
}

class CommunicationHelper: NSObject, ObservableObject, WCSessionDelegate {
  @Published var score = Score()
  var redrawViewCallback: (()->Void)?
  var session: WCSession
  init(session: WCSession = .default) {
    self.session = session
    super.init()
    self.session.delegate = self
    session.activate()
  }
  
  func setRedrawFunction(callback: @escaping ()->Void) {
    self.redrawViewCallback = callback
  }
  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {}
  func session(
    _ session: WCSession,
    didReceiveMessage message: [String: Any],
    replyHandler: @escaping ([String: Any]) -> Void
  ) {
    let scoreJsonString = message["text"] as! String
    let scoreJson = scoreJsonString.data(using: .utf8)!
    do {
      if let currentScore = try? JSONDecoder().decode(Score.self, from: scoreJson) {
        self.score = currentScore
      } else {
         print("Bad JSON")
      }
    } catch {
      // print(error)
    }
  }
  
  func sendScoreToPhone() {
    do {
      let jsonData = try JSONEncoder().encode(self.score)
      let jsonString = String(data: jsonData, encoding: .utf8)
      self.session.sendMessage(["score": jsonString], replyHandler: { (response) in
        // handle reply from iPhone app here
      }, errorHandler: {(error) -> Void in
        // catch any errors here
        print("Could not send score: ", error)
      })
    } catch {
      print("Bad JSON")
    }
  }
  
  func completeSetToPhone(isHomeWinner: Bool) {
    do {
      var closeSet = CloseSet()
      closeSet.isHomeWinner = isHomeWinner
      closeSet.home = self.score.homeTeamGames
      closeSet.visitor = self.score.visitorTeamGames
      let jsonData = try JSONEncoder().encode(closeSet)
      let jsonString = String(data: jsonData, encoding: .utf8)
      self.session.sendMessage(["completeSet": jsonString], replyHandler: { (response) in
        // handle reply from iPhone app here
      }, errorHandler: {(error) -> Void in
        // catch any errors here
        print("Could not send score: ", error)
      })
    } catch {
      print("Bad JSON")
    }
  }
  
  func increaseHomeCurrentGame() {
    if (self.score.homeTeamCurrentGame == "LOVE") {
      self.score.homeTeamCurrentGame = "15"
    } else if (self.score.homeTeamCurrentGame == "15") {
      self.score.homeTeamCurrentGame = "30"
    } else if (self.score.homeTeamCurrentGame == "30" && self.score.visitorTeamCurrentGame == "40") {
      self.score.homeTeamCurrentGame = "DUCE"
      self.score.visitorTeamCurrentGame = "DUCE"
    } else if (self.score.homeTeamCurrentGame == "30" && self.score.visitorTeamCurrentGame != "40") {
      self.score.homeTeamCurrentGame = "40"
    } else if (self.score.homeTeamCurrentGame == "DUCE") {
      self.score.homeTeamCurrentGame = "ADD"
      self.score.visitorTeamCurrentGame = ""
    } else if (self.score.homeTeamCurrentGame == "") {
      self.score.homeTeamCurrentGame = "DUCE"
      self.score.visitorTeamCurrentGame = "DUCE"
    }
    
    self.sendScoreToPhone()
  }
  
  func increaseVisitorCurrentGame() {
    if (self.score.visitorTeamCurrentGame == "LOVE") {
      self.score.visitorTeamCurrentGame = "15"
    } else if (self.score.visitorTeamCurrentGame == "15") {
      self.score.visitorTeamCurrentGame = "30"
    } else if (self.score.visitorTeamCurrentGame == "30" && self.score.homeTeamCurrentGame == "40") {
      self.score.visitorTeamCurrentGame = "DUCE"
      self.score.homeTeamCurrentGame = "DUCE"
    } else if (self.score.visitorTeamCurrentGame == "30" && self.score.homeTeamCurrentGame != "40") {
      self.score.visitorTeamCurrentGame = "40"
    } else if (self.score.visitorTeamCurrentGame == "DUCE") {
      self.score.visitorTeamCurrentGame = "ADD"
      self.score.homeTeamCurrentGame = ""
    } else if (self.score.visitorTeamCurrentGame == "") {
      self.score.visitorTeamCurrentGame = "DUCE"
      self.score.homeTeamCurrentGame = "DUCE"
    }
    
    self.sendScoreToPhone()
  }
  
  func increaseHomeGame() {
    self.score.homeTeamGames += 1
    self.score.homeTeamCurrentGame = "LOVE"
    self.score.visitorTeamCurrentGame = "LOVE"
    self.sendScoreToPhone()
  }
  
  func increaseVisitorGame() {
    self.score.visitorTeamGames += 1
    self.score.homeTeamCurrentGame = "LOVE"
    self.score.visitorTeamCurrentGame = "LOVE"
    self.sendScoreToPhone()
  }
  
  func increaseHomeSet() {
    self.score.homeTeamSets += 1
    self.score.homeTeamCurrentGame = "LOVE"
    self.score.visitorTeamCurrentGame = "LOVE"
    self.completeSetToPhone(isHomeWinner: true)
    self.score.homeTeamGames = 0
    self.score.visitorTeamGames = 0
  }
  
  func increaseVisitorSet() {
    self.score.visitorTeamSets += 1
    self.score.homeTeamCurrentGame = "LOVE"
    self.score.visitorTeamCurrentGame = "LOVE"
    self.completeSetToPhone(isHomeWinner: false)
    self.score.homeTeamGames = 0
    self.score.visitorTeamGames = 0
  }
}
