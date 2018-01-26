
function ajax (url) {
    return new Promise ((resolve,reject) => {
        let xml = new XMLHttpRequest ()
        xml.open('get',url)
         xml.onreadystatechange = function() {
            if (xml.readyState != 4) return;
            if (xml.status === 200) {
                resolve (JSON.parse(xml.responseText));
            } else {
                reject ("error")
            }
        }
          xml.send (null);
    }) 
}
class loadImg {
    constructor () {
        this.init()
    }
    init () {
        this.createBox()
    }
    createBox () {
        ajax("./data/data.json").then((result) => {
            for(let i in result){
                let image = new Image()
                image.src = result[i].img
                document.body.append(image)
            }
            }).catch((error) => {
                console.log(error);
            });
    }
}
let imgs = new loadImg()
 