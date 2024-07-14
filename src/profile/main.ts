import { Profile } from "./profile";
import { getVersion } from "../common/functions";

let profile: Profile | null = null;

async function main() {
    const version = await getVersion();
    document.title = 'Rock Buddy v' + version;

    profile = await Profile.create();
}

main();