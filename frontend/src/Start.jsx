import InfoArticle from "./InfoArticle";

const Start = () => {

    return (
        <div className="flex flex-col gap-16">
            <img src="./piggybank.jpg" alt="Piggybank" />
            <InfoArticle
                title='Welcome to Piggy Bank'
                tagline='You can trust us with your money. Just look at us. We have suits and ties!'
                img='./suitandtie.jpg'
                imgAlt='Suit and tie guy'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex labore amet modi ipsam. Aliquid temporibus placeat odit! Adipisci repudiandae fugiat earum dolor quas?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet omnis magnam commodi sapiente ea hic enim. Lorem ipsum dolor sit amet.</p>
            </InfoArticle>
            <InfoArticle
                title='Just imagine how safe your money will be behind this huge door'
                tagline='You can trust us with your money. Just look at us. We have this big ass steel door.'
                img='./vault.jpg'
                imgAlt='Bank vault'
                reverse={true}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex labore amet modi ipsam. Aliquid temporibus placeat odit! Adipisci repudiandae fugiat earum dolor quas?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet omnis magnam commodi sapiente ea hic enim. Lorem ipsum dolor sit amet.</p>
            </InfoArticle>
        </div>
    )

}

export default Start;