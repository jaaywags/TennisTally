//
//  ContentView.swift
//  TennisTallyWatch WatchKit Extension
//
//  Created by Jordan Wagner on 3/19/22.
//

import SwiftUI
import WatchKit
import WatchConnectivity
import Foundation
import ClockKit


struct FilledButton: ButtonStyle {
  let isHome: Bool
  func makeBody(configuration: Configuration) -> some View {
    configuration
      .label
//    .foregroundColor(configuration.isPressed ? .white : .blue) //text color
      .foregroundColor(.white) //text color
      .padding(EdgeInsets(top: 5, leading: 10, bottom: 5, trailing: 10))
//      .margin(isHome ? .trailing : .leading, 0)
      .background(isHome ? Color(red: 0 / 255, green: 109 / 255, blue: 199 / 255) : Color(red: 198 / 255, green: 57 / 255, blue: 57 / 255)) // background color
      .cornerRadius(4)
  }
}

struct ContentView: View {
  private var communicationHelper = CommunicationHelper()
  
    var body: some View {
      VStack {
        Text("SETS")
        HStack {
          Button("HOME", action: {
            self.communicationHelper.increaseHomeSet()
          })
          .buttonStyle(FilledButton(isHome: true))
          .padding(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 5))
          Button("AWAY", action: {
            self.communicationHelper.increaseVisitorSet()
          })
          .buttonStyle(FilledButton(isHome: false))
          .padding(EdgeInsets(top: 0, leading: 5, bottom: 0, trailing: 0))
        }
        Text("GAMES")
          .padding(EdgeInsets(top: 5, leading: 0, bottom: 0, trailing: 0))
        HStack {
          Button("HOME", action: {
            self.communicationHelper.increaseHomeGame()
          })
          .buttonStyle(FilledButton(isHome: true))
          .padding(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 5))
          Button("AWAY", action: {
            self.communicationHelper.increaseVisitorGame()
          })
          .buttonStyle(FilledButton(isHome: false))
          .padding(EdgeInsets(top: 0, leading: 5, bottom: 0, trailing: 0))
          
        }
        Text("Current Game")
          .padding(EdgeInsets(top: 5, leading: 0, bottom: 0, trailing: 0))
        HStack {
          Button("HOME", action: {
            self.communicationHelper.increaseHomeCurrentGame()
          })
          .buttonStyle(FilledButton(isHome: true))
          .padding(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 5))
          Button("AWAY", action: {
            self.communicationHelper.increaseVisitorCurrentGame()
          })
          .buttonStyle(FilledButton(isHome: false))
          .padding(EdgeInsets(top: 0, leading: 5, bottom: 0, trailing: 0))
        }
      }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
