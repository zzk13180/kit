#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// use common::read_to_serde_json;
// use robot::{keyboard_type_string, mouse_move_to, system_alert};
use serde_json::json;
use std::path::PathBuf;
use storage::{delete_storage_data, read_data, write_data};
use tauri::api::path::local_data_dir;
use tauri::{command, generate_handler};

#[command]
fn test_handler(the_argument: String) {
    println!("{}", the_argument);
    let storage_dir: PathBuf = local_data_dir().unwrap();
    println!("{:?}", storage_dir);
    write_data(&storage_dir, &the_argument, json!({ "an": "object" }));
    let data = read_data(&storage_dir, &the_argument).unwrap();
    println!("{:?}", data);
}

#[command]
fn storage_del(the_argument: String) {
    let storage_dir: PathBuf = local_data_dir().unwrap();
    delete_storage_data(&storage_dir, the_argument);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(generate_handler![test_handler, storage_del])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
