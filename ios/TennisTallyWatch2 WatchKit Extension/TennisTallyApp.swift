//
//  TennisTallyApp.swift
//  TennisTallyWatch2 WatchKit Extension
//
//  Created by Jordan Wagner on 3/26/22.
//

import SwiftUI

@main
struct TennisTallyApp: App {
    @SceneBuilder var body: some Scene {
        WindowGroup {
            NavigationView {
                ContentView()
            }
        }

        WKNotificationScene(controller: NotificationController.self, category: "myCategory")
    }
}
