let editMode = false
let heightMap = []

const toggelEditor = async (e) => {
    let td = document.querySelectorAll('.resizeable')

    if (e.code === 'Enter') {
        editMode = !editMode
    }

    if (editMode == true) {
        td.forEach((e) => {
            e.classList.add('active')
        })
    } else {
        let newArray = []

        td.forEach((e) => {
            e.classList.remove('active')

            newArray.push(e.clientHeight)
        })

        heightMap = newArray
    }

    console.log(heightMap)
}

const setHeightMap = () => {
    const localHeightMap = [300, 222, 289, 222, 222, 222, 222, 222, 302, 222, 273, 222]

    let td = document.querySelectorAll('.resizeable')

    td.forEach((e, index) => {
        e.style.height = localHeightMap[index] + 'px'
    })
}

const waitDocument = async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    // setHeightMap()

    document.addEventListener('keyup', (e) => {
        toggelEditor(e)
    })
}

waitDocument()
