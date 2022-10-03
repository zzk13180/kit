pub fn system_alert() {
    let response = autopilot::alert::alert(
        "Hello, world!",
        Some("AutoPilot Alert"),
        Some("OK"),
        Some("Cancel"),
    );
    match response {
        autopilot::alert::Response::Default => println!("Accepted"),
        autopilot::alert::Response::Cancel => println!("Canceled"),
    }
}

pub fn keyboard_type_string() {
    autopilot::key::type_string("Hello, world!", &[], 100.0, 0.0);
}

pub fn mouse_move_to() {
    const TWO_PI: f64 = std::f64::consts::PI * 2.0;
    let screen_size = autopilot::screen::size();
    let scoped_height = screen_size.height / 2.0 - 10.0; // Stay in screen bounds.
    for x in 0..screen_size.width as u64 {
        let y = (scoped_height * ((TWO_PI * x as f64) / screen_size.width).sin() + scoped_height)
            .round();
        autopilot::mouse::move_to(autopilot::geometry::Point::new(x as f64, y as f64)).unwrap();
        std::thread::sleep(std::time::Duration::from_millis(2569));
    }
}
