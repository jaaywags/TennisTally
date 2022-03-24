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
      .foregroundColor(.white)
      .padding(EdgeInsets(top: 5, leading: 10, bottom: 5, trailing: 10))
      .background(isHome ?
        Color(red: 0 / 255, green: 109 / 255, blue: 199 / 255) :
        Color(red: 198 / 255, green: 57 / 255, blue: 57 / 255))
      .cornerRadius(4)
  }
}

struct ContentView: View {
  @ObservedObject var communicationHelper = CommunicationHelper()
  
  var body: some View {
    ScrollView {
      VStack {
        Text(String(communicationHelper.score.homeTeamSets) + " - SETS - " + String(communicationHelper.score.visitorTeamSets))
          .font(.system(size: 12))
        HStack {
          Button("HOME", action: {
            communicationHelper.increaseHomeSet()
          })
          .buttonStyle(FilledButton(isHome: true))
          .padding(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 5))
          Button("AWAY", action: {
            communicationHelper.increaseVisitorSet()
          })
          .buttonStyle(FilledButton(isHome: false))
          .padding(EdgeInsets(top: 0, leading: 5, bottom: 0, trailing: 0))
        }
        Text(String(communicationHelper.score.homeTeamGames) + " - GAMES - " + String(communicationHelper.score.visitorTeamGames))
          .font(.system(size: 12))
          .padding(EdgeInsets(top: 5, leading: 0, bottom: 0, trailing: 0))
        HStack {
          Button("HOME", action: {
            communicationHelper.increaseHomeGame()
          })
          .buttonStyle(FilledButton(isHome: true))
          .padding(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 5))
          Button("AWAY", action: {
            communicationHelper.increaseVisitorGame()
          })
          .buttonStyle(FilledButton(isHome: false))
          .padding(EdgeInsets(top: 0, leading: 5, bottom: 0, trailing: 0))
          
        }
        Text("Current Game")
          .padding(EdgeInsets(top: 5, leading: 0, bottom: 0, trailing: 0))
          .font(.system(size: 12))
        HStack {
          Text(communicationHelper.score.homeTeamCurrentGame).frame(
            minWidth: 0,
            maxWidth: .infinity,
            alignment: .trailing
            )
            .font(.system(size: 12))
          Text(" - ")
            .font(.system(size: 12))
          Text(communicationHelper.score.visitorTeamCurrentGame).frame(
            minWidth: 0,
            maxWidth: .infinity,
            alignment: .leading
            )
            .font(.system(size: 12))
        }
        HStack {
          Button("HOME", action: {
            communicationHelper.increaseHomeCurrentGame()
          })
          .buttonStyle(FilledButton(isHome: true))
          .padding(EdgeInsets(top: 0, leading: 0, bottom: 0, trailing: 5))
          Button("AWAY", action: {
            communicationHelper.increaseVisitorCurrentGame()
          })
          .buttonStyle(FilledButton(isHome: false))
          .padding(EdgeInsets(top: 0, leading: 5, bottom: 0, trailing: 0))
        }
      }
    }
  }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
