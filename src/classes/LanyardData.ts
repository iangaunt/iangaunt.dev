interface DiscordUser {
    avatar: string;
    display_name: string;
    global_name: string;
    id: string;
    username: string;
}

interface Timestamps {
    start: number;
    end: number;
}

interface SpotifyData {
    album: string;
    album_art_url: string;
    artist: string;
    song: string;
    timestamps: Timestamps;
}

export default class LanyardData {
    discord_status: string;
    discord_user: DiscordUser;
    listening_to_spotify: boolean;
    spotify: SpotifyData | null;
    success: boolean;

    constructor(ds: string, du: DiscordUser, ls: boolean, s: SpotifyData | null, suc: boolean) {
        this.discord_status = ds;
        this.discord_user = du;
        this.listening_to_spotify = ls;
        this.spotify = s;
        this.success = suc;
    }
}