const books = [
    {
        title: "A",
        author: "aaa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec elementum quam, at semper magna. Vestibulum blandit, ante eu feugiat dignissim, diam dui ultrices dui, eget condimentum nibh neque ut orci. Donec scelerisque vulputate enim, ac congue felis tristique eu. Donec odio eros, pulvinar fermentum sapien nec, sollicitudin aliquet ipsum. Etiam rhoncus augue non dapibus tincidunt. Vivamus nulla urna, interdum nec nibh id, maximus accumsan enim. Morbi velit leo, ornare in tortor nec, imperdiet mattis metus. In ut tellus convallis, vehicula sapien quis, feugiat libero. Vestibulum ipsum ipsum, tincidunt nec egestas sed, efficitur eget turpis. Phasellus varius arcu eu iaculis cursus. Nam lobortis luctus tempor. In id enim velit. Maecenas semper at tortor at aliquet. Nam eleifend neque a nunc suscipit, a tincidunt leo mollis. Praesent ullamcorper dolor arcu, quis dictum ante euismod eget. Suspendisse posuere vel turpis ac placerat. ",
        imageUrl: "https://picsum.photos/id/143/300/200",
        price: 0.59,
        currency: "USD",
    },
    {
        title: "B",
        author: "bbb",
        description: "Ut et iaculis velit. Maecenas tempor, mi nec volutpat elementum, nibh tellus elementum sem, at feugiat eros eros sed metus. Quisque vel mi sapien. Cras condimentum, quam eget varius condimentum, mi urna vulputate nibh, sed sollicitudin lectus dui nec ipsum. Integer fermentum tellus id nisi commodo efficitur. Nunc blandit dui massa, sit amet pretium dolor porttitor sed. Vestibulum quis lacinia ipsum, pretium egestas mauris. Praesent sit amet pulvinar dui. Fusce nunc erat, rhoncus ut risus ut, tincidunt convallis ipsum. Vivamus eu ligula nisl. Praesent interdum, justo eu posuere sagittis, enim sem venenatis mi, eget vestibulum ante est vel dui. Sed dictum nulla velit, eget congue elit malesuada vel. Praesent in auctor mi. Ut nec condimentum nisl. Vivamus a enim vel nulla aliquet luctus. ",
        imageUrl: "https://picsum.photos/id/11/300/200",
        price: 0.79,
        currency: "USD",
    },
    {
        title: "C",
        author: "ccc",
        description: "Nullam eu elit accumsan, bibendum nulla id, consequat lorem. Quisque viverra nibh lacus, vel maximus justo tincidunt in. Nulla sit amet lacus nisl. Nunc lobortis vulputate felis, at mattis nulla porttitor mattis. Praesent in feugiat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula eu mi quis bibendum. ",
        imageUrl: "https://picsum.photos/id/12/300/200",
        price: 0.79,
        currency: "USD",
    },
    {
        title: "D",
        author: "ddd",
        description: "Vivamus mattis erat justo, vitae ornare nisl semper in. Donec hendrerit elit quis porta sodales. Mauris ligula enim, porttitor egestas semper sit amet, gravida vitae lacus. Morbi ultrices, magna et ultricies eleifend, felis eros convallis diam, a accumsan purus velit sed erat. Vestibulum eros diam, faucibus non fringilla ut, venenatis eget ligula. Vestibulum at venenatis mauris. Nullam lobortis eu nibh quis fringilla. Aliquam sit amet nisl mi. Vivamus scelerisque ultricies diam, et placerat quam volutpat ut. Proin at ornare lorem, nec commodo turpis. Integer mi sapien, posuere ac lectus a, pharetra finibus sapien. Sed tellus quam, lobortis ac velit at, iaculis commodo nisl. Mauris ac mi lacus. Duis convallis tempor tincidunt. Integer maximus, dui a ultrices dapibus, elit enim sodales est, ut consectetur diam est sit amet magna. Aliquam sodales massa vel tellus euismod tempus. ",
        imageUrl: "https://picsum.photos/id/15/300/200",
        price: 0.89,
        currency: "USD",
    },
    {
        title: "E",
        author: "eee",
        description: "Sed dolor velit, suscipit id lorem quis, faucibus luctus urna. Maecenas semper diam et rutrum suscipit. Mauris vitae ornare sem. Quisque suscipit, tellus et tincidunt dapibus, dolor lacus commodo ligula, eu faucibus lectus purus et massa. Nullam tempor mollis odio, eget convallis urna blandit nec. Aliquam erat volutpat. Etiam eu sollicitudin arcu. Quisque venenatis id purus in lacinia. Integer a quam commodo, porta urna non, suscipit est. Etiam vitae libero eget lacus facilisis bibendum. Aenean pulvinar vitae risus non dignissim. Sed elit lectus, efficitur in libero a, viverra tincidunt ipsum. Cras venenatis nec risus et auctor. ",
        imageUrl: "https://picsum.photos/id/31/300/200",
        price: 0.89,
        currency: "USD",
    },
    {
        title: "F",
        author: "fff",
        description: "Curabitur in faucibus eros. Proin eu efficitur elit. Aliquam euismod eu arcu vel sodales. Nullam id erat tellus. Vivamus suscipit, erat in egestas rutrum, neque sem semper massa, non vulputate arcu mi sed nisl. Donec eget sem malesuada, fermentum neque eu, tempus nibh. Donec id massa nec sem malesuada commodo id at orci. Quisque tempor placerat massa, sit amet tincidunt tellus hendrerit in. Quisque quam libero, euismod vel pulvinar id, euismod vel felis. Sed ac tellus ac felis iaculis viverra dapibus quis metus. Etiam commodo mattis turpis eget rhoncus. Sed id rhoncus nunc. ",
        imageUrl: "https://picsum.photos/id/91/300/200",
        price: 0.59,
        currency: "USD",
    },
    {
        title: "G",
        author: "ggg",
        description: "Cras congue mi sed eros consectetur tincidunt. Cras mollis dolor ut mi condimentum, sit amet rutrum odio fringilla. Nam sollicitudin venenatis dui, ut porta justo mollis sit amet. Nunc eu velit risus. Proin eu lorem volutpat, facilisis dolor ac, porta tortor. Nam at nunc pharetra, finibus massa vitae, rhoncus erat. Nunc fermentum efficitur arcu nec feugiat. Quisque vel augue a mauris euismod sagittis nec at nunc. Nulla non elit sed ipsum porta sollicitudin. Etiam aliquam leo ac risus convallis, quis dictum augue feugiat. ",
        imageUrl: "https://picsum.photos/id/15/300/200",
        price: 0.59,
        currency: "USD",
    },
    {
        title: "H",
        author: "hhh",
        description: "Etiam tempus lacinia porttitor. Praesent sit amet massa lacus. Duis lobortis vestibulum sagittis. Proin sollicitudin magna non est aliquet rhoncus. Vestibulum faucibus est ut nisi suscipit, id porta ipsum aliquam. Pellentesque accumsan feugiat diam. Praesent venenatis justo a pulvinar tempor. ",
        imageUrl: "https://picsum.photos/id/93/300/200",
        price: 0.79,
        currency: "USD",
    },
]

module.exports = books