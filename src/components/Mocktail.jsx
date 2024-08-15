export const Mocktails = () =>{
    return(
        <div>
            <h1>Mocktail recipes:</h1>
            <body>

{/* With more time spent on css, textAlign would be included in a global css document rather than in line on lists */}

    <div>
        <h2>1. Virgin Mojito</h2>
        <div>
            <h3>Ingredients:</h3>
            <ul style={{textAlign: 'left'}}>
                <li>10 fresh mint leaves</li>
                <li>1/2 lime, cut into 4 wedges</li>
                <li>2 tablespoons white sugar</li>
                <li>1 cup ice cubes</li>
                <li>1/2 cup club soda</li>
                <li>1/2 cup ginger ale</li>
            </ul>
        </div>
        <div>
            <h3>Instructions:</h3>
            <ol style={{textAlign: 'left'}}>
                <li>Place mint leaves and 1 lime wedge into a sturdy glass.</li>
                <li>Use a muddler to crush the mint and lime to release the mint oils and lime juice.</li>
                <li>Add 2 more lime wedges and the sugar, and muddle again to release the lime juice.</li>
                <li>Do not strain the mixture.</li>
                <li>Fill the glass almost to the top with ice.</li>
                <li>Pour the club soda and ginger ale over the ice.</li>
                <li>Stir, taste, and add more sugar if desired.</li>
                <li>Garnish with the remaining lime wedge and a sprig of mint.</li>
            </ol>
        </div>
    </div>

    <div style={{backgroundColor: 'white', color: 'black'}}>
        <h2>2. Shirley Temple</h2>
        <div>
            <h3>Ingredients:</h3>
            <ul style={{textAlign: 'left'}}>
                <li>1/2 cup ginger ale</li>
                <li>1/2 cup lemon-lime soda</li>
                <li>1/4 cup orange juice</li>
                <li>1 tablespoon grenadine</li>
                <li>Maraschino cherry for garnish</li>
            </ul>
        </div>
        <div>
            <h3>Instructions:</h3>
            <ol style={{textAlign: 'left'}}>
                <li>Fill a glass with ice.</li>
                <li>Pour the ginger ale, lemon-lime soda, and orange juice over the ice.</li>
                <li>Add the grenadine and stir gently to combine.</li>
                <li>Garnish with a maraschino cherry.</li>
            </ol>
        </div>
    </div>

    <div>
        <h2>3. Nojito</h2>
        <div>
            <h3>Ingredients:</h3>
            <ul style={{textAlign: 'left'}}>
                <li>1 tablespoon simple syrup</li>
                <li>1/2 lime, cut into wedges</li>
                <li>10 fresh mint leaves</li>
                <li>Crushed ice</li>
                <li>1/2 cup soda water</li>
                <li>1/2 cup lemonade</li>
            </ul>
        </div>
        <div>
            <h3>Instructions:</h3>
            <ol style={{textAlign: 'left'}}>
                <li>Place the lime wedges and mint leaves in a glass.</li>
                <li>Add the simple syrup and muddle well to release the flavors.</li>
                <li>Fill the glass with crushed ice.</li>
                <li>Pour the soda water and lemonade over the ice.</li>
                <li>Stir gently to mix.</li>
                <li>Garnish with a mint sprig and a lime wheel.</li>
            </ol>
        </div>
    </div>
</body>
        </div>
    )
} 