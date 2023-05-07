import myJson from './goods.json' assert {type: 'json'};

const postGoodsHome = () => {
    let data = myJson.slice(0, 4);
    const wrapper = document.querySelector('.content')
    wrapper.innerHTML = createTemplate(data)
    wrapper.addEventListener('click',(e) => {
        getGoods(e,data)
    })
}
postGoodsHome()
