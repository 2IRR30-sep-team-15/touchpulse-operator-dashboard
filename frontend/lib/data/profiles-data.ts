import { Profile } from "@/lib/interfaces/profile";

export const PROFILES_DATA: Profile[] = [
    {
      name: "Jane Doe",
      username: "janedoe",
      image: "https://i.pravatar.cc/150?img=1",
      id: "p1",
      details: {
        email: "jane.doe@example.com",
        phone: "+1 (555) 101-1001",
        languages: ["English", "French"],
        sight: "Fully sighted", 
        cane: false, 
        guideDog: false
      },
      chats: [
        { correspondent: "Alex", lastMessage: "See you at 4pm!", timestamp: "2 hours ago" },
        { correspondent: "Support Team", lastMessage: "Issue resolved.", timestamp: "Yesterday" }
      ],
      locations: [
        { name: "Home", address: "123 Main St, Anytown", latitude: 40.7128, longitude: -74.0060 },
        { name: "Park Ave Cafe", address: "42 Park Ave", latitude: 40.7306, longitude: -73.9990 }
      ]
    }, 
    {
      name: "John Smith",
      username: "johnsmith",
      image: "https://i.pravatar.cc/150?img=2",
      id: "p2",
      details: {
        email: "john.smith@example.com",
        phone: "+1 (555) 102-1002",
        languages: ["English", "Spanish"],
        sight: "Partially sighted", 
        cane: true, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Maria", lastMessage: "Can we reschedule?", timestamp: "15 min ago" },
        { correspondent: "Emergency Contact", lastMessage: "Confirmed safe.", timestamp: "3 days ago" }
      ],
      locations: [
        { name: "Apartment", address: "789 Oak Lane", latitude: 34.0522, longitude: -118.2437 },
        { name: "Library", address: "10 Main Library Rd", latitude: 34.0580, longitude: -118.2500 }
      ]
    }, 
    {
      name: "Emily Carter",
      username: "emilyc",
      image: "https://i.pravatar.cc/150?img=3",
      id: "p3",
      details: {
        email: "emily.carter@example.com",
        phone: "+1 (555) 103-1003",
        languages: ["German", "English"],
        sight: "Blind", 
        cane: true, 
        guideDog: true 
      },
      chats: [
        { correspondent: "Guide Dog Trainer", lastMessage: "Ruff ruff!", timestamp: "Now" }
      ],
      locations: [
        { name: "Home", address: "33 Pine St", latitude: 51.5074, longitude: -0.1278 },
        { name: "Gym", address: "55 Health Way", latitude: 51.5100, longitude: -0.1300 }
      ]
    }, 
    {
      name: "Michael Lee",
      username: "mlee",
      image: "https://i.pravatar.cc/150?img=4",
      id: "p4",
      details: {
        email: "michael.lee@example.com",
        phone: "+1 (555) 104-1004",
        languages: ["Mandarin", "English"],
        sight: "Fully sighted", 
        cane: false, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Sarah (Colleague)", lastMessage: "Files are attached.", timestamp: "Today 10:00 AM" }
      ],
      locations: [
        { name: "Apartment", address: "20 Central Blvd", latitude: 37.7749, longitude: -122.4194 }
      ]
    }, 
    {
      name: "Sophia Turner",
      username: "sophiat",
      image: "https://i.pravatar.cc/150?img=5",
      id: "p5",
      details: {
        email: "sophia.turner@example.com",
        phone: "+1 (555) 105-1005",
        languages: ["English"],
        sight: "Partially sighted", 
        cane: false, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Mom", lastMessage: "Love you!", timestamp: "Yesterday 5:30 PM" }
      ],
      locations: [
        { name: "University", address: "900 Main Campus Dr", latitude: 33.7490, longitude: -84.3880 }
      ]
    }, 
    {
      name: "Daniel Kim",
      username: "danielk",
      image: "https://i.pravatar.cc/150?img=6",
      id: "p6",
      details: {
        email: "daniel.kim@example.com",
        phone: "+1 (555) 106-1006",
        languages: ["Korean", "English"],
        sight: "Fully sighted", 
        cane: false, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Jae", lastMessage: "Dinner soon?", timestamp: "1 hour ago" },
        { correspondent: "Delivery", lastMessage: "Package left at door.", timestamp: "Today 11:00 AM" }
      ],
      locations: [
        { name: "Cafe", address: "50 Coffee Ln", latitude: 34.0522, longitude: -118.2437 }
      ]
    }, 
    {
      name: "Ava Martinez",
      username: "avam",
      image: "https://i.pravatar.cc/150?img=7",
      id: "p7",
      details: {
        email: "ava.martinez@example.com",
        phone: "+1 (555) 107-1007",
        languages: ["Spanish"],
        sight: "Blind", 
        cane: true, 
        guideDog: true 
      },
      chats: [
        { correspondent: "Marco", lastMessage: "Hola! Todo bien.", timestamp: "5 min ago" }
      ],
      locations: [
        { name: "Home", address: "14 Palm Rd", latitude: 25.7617, longitude: -80.1918 },
        { name: "Hospital", address: "800 Health Ct", latitude: 25.7650, longitude: -80.1950 }
      ]
    }, 
    {
      name: "Liam Johnson",
      username: "liamj",
      image: "https://i.pravatar.cc/150?img=8",
      id: "p8",
      details: {
        email: "liam.johnson@example.com",
        phone: "+1 (555) 108-1008",
        languages: ["English"],
        sight: "Fully sighted", 
        cane: false, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Dad", lastMessage: "Let's call tonight.", timestamp: "Today 9:00 AM" }
      ],
      locations: [
        { name: "Work", address: "100 Tech Tower", latitude: 37.3382, longitude: -121.8863 }
      ]
    }, 
    {
      name: "Olivia Chen",
      username: "oliviac",
      image: "https://i.pravatar.cc/150?img=9",
      id: "p9",
      details: {
        email: "olivia.chen@example.com",
        phone: "+1 (555) 109-1009",
        languages: ["Mandarin"],
        sight: "Partially sighted", 
        cane: true, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Brother", lastMessage: "Need help with the app.", timestamp: "2 hours ago" }
      ],
      locations: [
        { name: "Home", address: "900 Willow Dr", latitude: 39.9526, longitude: -75.1652 }
      ]
    }, 
    {
      name: "Noah Brown",
      username: "noahb",
      image: "https://i.pravatar.cc/150?img=10",
      id: "p10",
      details: {
        email: "noah.brown@example.com",
        phone: "+1 (555) 110-1010",
        languages: ["English", "Portuguese"],
        sight: "Fully sighted", 
        cane: false, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Friend Group", lastMessage: "Check out the new song!", timestamp: "Yesterday" }
      ],
      locations: [
        { name: "Gym", address: "55 Fitness Way", latitude: 41.8781, longitude: -87.6298 }
      ]
    }, 
    {
      name: "Isabella Garcia",
      username: "isag",
      image: "https://i.pravatar.cc/150?img=11",
      id: "p11",
      details: {
        email: "isabella.garcia@example.com",
        phone: "+1 (555) 111-1011",
        languages: ["Spanish", "English"],
        sight: "Blind", 
        cane: true, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Juan", lastMessage: "¡Gracias!", timestamp: "4 hours ago" }
      ],
      locations: [
        { name: "Home", address: "400 Valley St", latitude: 32.7157, longitude: -117.1611 },
        { name: "Grocery Store", address: "12 Food Mart", latitude: 32.7200, longitude: -117.1650 }
      ]
    }, 
    {
      name: "Ethan Wilson",
      username: "ethanw",
      image: "https://i.pravatar.cc/150?img=12",
      id: "p12",
      details: {
        email: "ethan.wilson@example.com",
        phone: "+1 (555) 112-1012",
        languages: ["English"],
        sight: "Fully sighted", 
        cane: false, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Project Lead", lastMessage: "Deadline is Friday.", timestamp: "Today 8:00 AM" }
      ],
      locations: [
        { name: "Remote Office", address: "200 Cloud Ct", latitude: 33.7490, longitude: -84.3880 }
      ]
    }, 
    {
      name: "Mia Rodriguez",
      username: "miar",
      image: "https://i.pravatar.cc/150?img=13",
      id: "p13",
      details: {
        email: "mia.rodriguez@example.com",
        phone: "+1 (555) 113-1013",
        languages: ["Spanish"],
        sight: "Partially sighted", 
        cane: true, 
        guideDog: false 
      },
      chats: [
        { correspondent: "Doctor", lastMessage: "Appointment confirmed.", timestamp: "Last Week" }
      ],
      locations: [
        { name: "Apartment", address: "100 Ocean Blvd", latitude: 39.2904, longitude: -76.6122 }
      ]
    },
    {
      name: "Lucas Hernandez",
      username: "lucash",
      image: "https://i.pravatar.cc/150?img=14",
      id: "p14",
      details: {
        email: "lucas.hernandez@example.com",
        phone: "+1 (555) 114-1014",
        languages: ["English", "Japanese"],
        sight: "Fully sighted", 
        cane: false, 
        guideDog: true 
      },
      chats: [
        { correspondent: "Dog Walker", lastMessage: "Dog has been walked.", timestamp: "30 min ago" }
      ],
      locations: [
        { name: "Home", address: "77 Maple St", latitude: 40.7128, longitude: -74.0060 }
      ]
    },
    {
      name: "Amelia King",
      username: "ameliak",
      image: "https://i.pravatar.cc:150?img=15",
      id: "p15",
      details: {
        email: "amelia.king@example.com",
        phone: "+1 (555) 115-1015",
        languages: ["English"],
        sight: "Blind", 
        cane: false, 
        guideDog: true 
      },
      chats: [
        { correspondent: "Husband", lastMessage: "Heading home now.", timestamp: "Today 4:00 PM" }
      ],
      locations: [
        { name: "Home", address: "21 Cedar Ave", latitude: 38.9072, longitude: -77.0369 },
        { name: "Pet Store", address: "45 Doggo Way", latitude: 38.9100, longitude: -77.0300 }
      ]
    },
    {
      name: "Alex Mildronats",
      username: "porGamer22",
      image: "https://i.pravatar.cc/150?img=16",
      id: "p16",
      details: {
        email: "jacob.baker@example.com",
        phone: "+1 742 804 359",
        languages: ["French", "Hungarian"],
        sight: "Partially sighted", 
        cane: true, 
        guideDog: false
      },
      chats: [
        { correspondent: "Neighbor", lastMessage: "Thanks for the help!", timestamp: "Yesterday 7:00 PM" }
      ],
      locations: [
        { name: "Apt", address: "99 Riverfront Dr", latitude: 42.3601, longitude: -71.0589 }
      ]
    },
];
