export default {
    prevSlide: (deck) => {
        let i = 0
        i = i + 1; // increase i by one
        i = i % deck.length; // if we've gone too high, start from `0` again
        return deck[i]; // give us back the item of where we are now
    },

    nextSlide: (deck) => {
        let i = 0
        if (i === 0) { // i would become 0
            i = deck.length; // so put it at the other end of the array
        }
        i = i - 1; // decrease by one
        return deck[i]; // give us back the item of where we are now
    },

    // directing the slideshow to a particular image
    // we'll use n to number or differentiate our decks 
    // so that when we click on a particular deck only the contents of that one shows 
    toSlide: (n, deck) =>{
        showSlide(n, deck);
    },

    // making the slides
    // n = 1 if no value is provided / making 1 the default value for 
    showSlide: (n=0, deck) => {

        // this following code is what's actually making the slide show. 
        // this code sets all slides to display none while displaying one slide at a time
        for (let i = 0; i < deck.length; i++) {
        deck[i].style.display = "none";
        };

        //displays the clicked image in the slide 
        deck[n].style.display = 'block';
    },
    
};