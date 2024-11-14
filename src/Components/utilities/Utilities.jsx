const getstoredcard =() => {
const storedcardstr=localStorage.getItem(`read-list`)
if(storedcardstr){
    const storedcard = JSON.parse(storedcardstr)

    return storedcard;
}
else{
    return[];
}
}

const addToStoredCard = (id) => {
    const storedcard = getstoredcard();
    if(storedcard.includes(id)){
        console.log(id,'already exists in the read list')

    }
    else{
        storedcard.push(id);
        const storedcardstr =JSON.stringify(storedcard)
        localStorage.setItem("read-list",storedcardstr)
    }

}

const getstoredwishlist =()=>{
    const storewishliststr =localStorage.getItem('wish-list');
    if (storewishliststr){
        const storedwishlist = JSON.parse(storedwishliststr);
        return storedwishlist;
    }
    else{
        return[];
    }
}

const addToStoredWishlist = (id)=>{
    const storedWishlist= getstoredwishlist();
    if(storedWishlist.includes(id)){
        console.log(id,'already exists in th eread list')

    }
    else{
        storedWishlist.push(id);
        const storedwishliststr = JSON.stringify(storedWishlist );
        localStorage.setItem('wish-list',storedwishliststr)
    }
}

export{addToStoredCard,addToStoredWishlist,getstoredcard}