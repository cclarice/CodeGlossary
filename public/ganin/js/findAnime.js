let stdin = process.openStdin()


stdin.addListener("data", findAnime)

const animeList = [
    'Моя геройская академия',
    'Rerezo Жизнь с нуля',
    'Jojo',
    'One Punch Man',
    'Наруто',
    'One Peace',
    'Унесённые призраками',
    'В подземелье я пойну, я красавицу найду',
    'Волчится и пряности',
    'Атака титанов',
    'Паразит, учение о жизни'
]

function findAnime (input) {
    const   string  = input.toString().trim()
    let     anime   = null

    anime = animeList.filter((anime) => {
        return (anime.toLowerCase().includes(string.toLowerCase()))
    })

    if (anime.length) {
        console.log(`Было найдено ${anime.length} аниме:`)
        for (const a of anime) {
            console.log(a)
        }
    } else {
        console.log('Аниме не было найдено!')
    }
    return anime
}

