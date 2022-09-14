let toufikImages = [
    "https://img.freepik.com/free-photo/beautiful-scenery-pathway-forest-with-trees-covered-with-frost_181624-42376.jpg?w=740&t=st=1663134599~exp=1663135199~hmac=dc08ec9eaac138d115d485a63549ffb91812ea9c298ec2c1585bc18ee7996907",
    "https://img.freepik.com/free-photo/pathway-middle-forest-with-big-green-leafed-trees_181624-4332.jpg?w=740&t=st=1663134662~exp=1663135262~hmac=0e92b54f67eadfe947854c9833d77ff10be6c0ad4b028b007656569acdb3f0710",
    "https://img.freepik.com/free-photo/panoramic-view-roys-peak-new-zealand-with-low-mountains-distance-cloudscape_181624-29300.jpg?w=740&t=st=1663134686~exp=1663135286~hmac=1df55268c4b926090a23697a48433695d8eef53e6650a1e04ca01f3cea74205b",
    "https://img.freepik.com/premium-photo/bicycle-track-dune-landscape-with-runner-horizon_181624-55917.jpg?w=900"
];

const imgs = document.getElementsByTagName("img");
for (let i=0; i<imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * toufikImages.length);
    imgs[i].src = toufikImages[randomImg];
}