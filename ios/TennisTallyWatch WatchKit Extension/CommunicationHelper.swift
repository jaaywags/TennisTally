import WatchKit
import WatchConnectivity
import Foundation

var bassGain: Int = 0
var midGain: Int = 0
var trebleGain: Int = 0

class CommunicationHelper: NSObject, WCSessionDelegate {
  var counter = 0
  var session: WCSession
  init(session: WCSession = .default){
    print("activating session")
    self.session = session
    super.init()
    self.session.delegate = self
    session.activate()
    print("done activating session")
  }
  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {}
  
  func increaseHomeCurrentGame() {
    self.session.sendMessage(["text": "INCREASE_HOME_CURRENT_GAME"], replyHandler: { (response) in
      // handle reply from iPhone app here
    }, errorHandler: {(error ) -> Void in
      // catch any errors here
    })
  }
  
  func increaseVisitorCurrentGame() {
    self.session.sendMessage(["text": "INCREASE_VISITOR_CURRENT_GAME"], replyHandler: { (response) in
      // handle reply from iPhone app here
    }, errorHandler: {(error ) -> Void in
      // catch any errors here
    })
  }
  
  func increaseHomeGame() {
    self.session.sendMessage(["text": "INCREASE_HOME_GAME"], replyHandler: { (response) in
      // handle reply from iPhone app here
    }, errorHandler: {(error ) -> Void in
      // catch any errors here
    })
  }
  
  func increaseVisitorGame() {
    self.session.sendMessage(["text": "INCREASE_VISITOR_GAME"], replyHandler: { (response) in
      // handle reply from iPhone app here
    }, errorHandler: {(error ) -> Void in
      // catch any errors here
    })
  }
  
  func increaseHomeSet() {
    self.session.sendMessage(["text": "INCREASE_HOME_SET"], replyHandler: { (response) in
      // handle reply from iPhone app here
    }, errorHandler: {(error ) -> Void in
      // catch any errors here
    })
  }
  
  func increaseVisitorSet() {
    self.session.sendMessage(["text": "INCREASE_VISITOR_SET"], replyHandler: { (response) in
      // handle reply from iPhone app here
    }, errorHandler: {(error ) -> Void in
      // catch any errors here
    })
  }
}
