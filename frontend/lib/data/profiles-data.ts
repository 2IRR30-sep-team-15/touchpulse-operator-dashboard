import { Profile } from "../interfaces/profile";

export const PROFILES_DATA: Profile[] = [
    {
      name: "Jane Doe", 
      username: "janedoe", 
      image: "https://i.pravatar.cc/150?img=1",
      id: "p1",
      email: "jane.doe@example.com",
      phone: "+1 (555) 101-1001",
      languages: ["English", "French"],
      accessibility: {
        sight: "Fully sighted",
        cane: false,
        guideDog: false
      }
    }, 
    {
      name: "John Smith", 
      username: "johnsmith", 
      image: "https://i.pravatar.cc/150?img=2",
      id: "p2",
      email: "john.smith@example.com",
      phone: "+1 (555) 102-1002",
      languages: ["English", "Spanish"],
      accessibility: {
        sight: "Partially sighted",
        cane: true,
        guideDog: false
      }
    }, 
    {
      name: "Emily Carter", 
      username: "emilyc", 
      image: "https://i.pravatar.cc/150?img=3",
      id: "p3",
      email: "emily.carter@example.com",
      phone: "+1 (555) 103-1003",
      languages: ["German", "English"],
      accessibility: {
        sight: "Blind",
        cane: true,
        guideDog: true
      }
    }, 
    {
      name: "Michael Lee", 
      username: "mlee", 
      image: "https://i.pravatar.cc/150?img=4",
      id: "p4",
      email: "michael.lee@example.com",
      phone: "+1 (555) 104-1004",
      languages: ["Mandarin", "English"],
      accessibility: {
        sight: "Fully sighted",
        cane: false,
        guideDog: false
      }
    }, 
    {
      name: "Sophia Turner", 
      username: "sophiat", 
      image: "https://i.pravatar.cc/150?img=5",
      id: "p5",
      email: "sophia.turner@example.com",
      phone: "+1 (555) 105-1005",
      languages: ["English"],
      accessibility: {
        sight: "Partially sighted",
        cane: false,
        guideDog: false
      }
    }, 
    {
      name: "Daniel Kim", 
      username: "danielk", 
      image: "https://i.pravatar.cc/150?img=6",
      id: "p6",
      email: "daniel.kim@example.com",
      phone: "+1 (555) 106-1006",
      languages: ["Korean", "English"],
      accessibility: {
        sight: "Fully sighted",
        cane: false,
        guideDog: false
      }
    }, 
    {
      name: "Ava Martinez", 
      username: "avam", 
      image: "https://i.pravatar.cc/150?img=7",
      id: "p7",
      email: "ava.martinez@example.com",
      phone: "+1 (555) 107-1007",
      languages: ["Spanish"],
      accessibility: {
        sight: "Blind",
        cane: true,
        guideDog: true
      }
    }, 
    {
      name: "Liam Johnson", 
      username: "liamj", 
      image: "https://i.pravatar.cc/150?img=8",
      id: "p8",
      email: "liam.johnson@example.com",
      phone: "+1 (555) 108-1008",
      languages: ["English"],
      accessibility: {
        sight: "Fully sighted",
        cane: false,
        guideDog: false
      }
    }, 
    {
      name: "Olivia Chen", 
      username: "oliviac", 
      image: "https://i.pravatar.cc/150?img=9",
      id: "p9",
      email: "olivia.chen@example.com",
      phone: "+1 (555) 109-1009",
      languages: ["Mandarin"],
      accessibility: {
        sight: "Partially sighted",
        cane: true,
        guideDog: false
      }
    }, 
    {
      name: "Noah Brown", 
      username: "noahb", 
      image: "https://i.pravatar.cc/150?img=10",
      id: "p10",
      email: "noah.brown@example.com",
      phone: "+1 (555) 110-1010",
      languages: ["English", "Portuguese"],
      accessibility: {
        sight: "Fully sighted",
        cane: false,
        guideDog: false
      }
    }, 
    {
      name: "Isabella Garcia", 
      username: "isag", 
      image: "https://i.pravatar.cc/150?img=11",
      id: "p11",
      email: "isabella.garcia@example.com",
      phone: "+1 (555) 111-1011",
      languages: ["Spanish", "English"],
      accessibility: {
        sight: "Blind",
        cane: true,
        guideDog: false
      }
    }, 
    {
      name: "Ethan Wilson", 
      username: "ethanw", 
      image: "https://i.pravatar.cc/150?img=12",
      id: "p12",
      email: "ethan.wilson@example.com",
      phone: "+1 (555) 112-1012",
      languages: ["English"],
      accessibility: {
        sight: "Fully sighted",
        cane: false,
        guideDog: false
      }
    }, 
    {
      name: "Mia Rodriguez", 
      username: "miar", 
      image: "https://i.pravatar.cc/150?img=13",
      id: "p13",
      email: "mia.rodriguez@example.com",
      phone: "+1 (555) 113-1013",
      languages: ["Spanish"],
      accessibility: {
        sight: "Partially sighted",
        cane: true,
        guideDog: false
      }
    },
    {
      name: "Lucas Hernandez", 
      username: "lucash", 
      image: "https://i.pravatar.cc/150?img=14",
      id: "p14",
      email: "lucas.hernandez@example.com",
      phone: "+1 (555) 114-1014",
      languages: ["English", "Japanese"],
      accessibility: {
        sight: "Fully sighted",
        cane: false,
        guideDog: true // Sighted, but still has a guide dog (e.g., service dog for other reasons)
      }
    },
    {
      name: "Amelia King", 
      username: "ameliak", 
      image: "https://i.pravatar.cc/150?img=15",
      id: "p15",
      email: "amelia.king@example.com",
      phone: "+1 (555) 115-1015",
      languages: ["English"],
      accessibility: {
        sight: "Blind",
        cane: false,
        guideDog: true
      }
    },
    {
      name: "Jacob Baker", 
      username: "jacobb", 
      image: "https://i.pravatar.cc/150?img=16",
      id: "p16",
      email: "jacob.baker@example.com",
      phone: "+1 (555) 116-1016",
      languages: ["French"],
      accessibility: {
        sight: "Partially sighted",
        cane: true,
        guideDog: true
      }
    },
];