User.destroy_all
Event.destroy_all


flux = Event.create(name: "Flux Pavilion", )
illenium = Event.create(name: "Illenium")
rezz = Event.create(name: "Rezz")
drake = Event.create(name: "Drake")

User.create(name: "Ryan", favorite_event_type: "Music", event: rezz)