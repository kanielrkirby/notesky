// import Menu
use tauri::{Menu, Submenu, CustomMenuItem, MenuItem};

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    let submenu_gear = Submenu::new(
        "Notesky", 
        Menu::new()
            .add_native_item(MenuItem::Copy));
    let submenu_edit = Submenu::new(
        "Edit", 
        Menu::new()
           .add_native_item(MenuItem::Copy));
    let menus = Menu::new()
        .add_submenu(submenu_gear)
        .add_submenu(submenu_edit);

    tauri::Builder::default()
        .menu(menus)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}