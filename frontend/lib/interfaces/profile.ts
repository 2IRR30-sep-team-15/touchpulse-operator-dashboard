import { Detail } from "./detail"
import { Chat } from "./chat"
import { Location } from "./location"


export interface Profile {
    id: string;
    name: string;
    username: string;
    image?: string;
    details: Detail;
    chats: Chat[];
    locations: Location[];
}