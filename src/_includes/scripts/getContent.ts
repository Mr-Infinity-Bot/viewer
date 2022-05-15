export const getContent = async(url: string | null) => {
    if (!url) return;

    const content = await (await fetch(`https://api-infinity2.hyrousek.tk/discord_attachment/get?url=${url}`)).json();
    return atob(content.content);
}