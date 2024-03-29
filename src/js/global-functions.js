import { refs, fetchEl, point, counter } from './refs.js';

export const renderCard = ({ strDrinkThumb, strDrink, idDrink }) => {
    return `
  <li class="gallery__coctail_box">
        <picture class="gallery__coctail_img">
          <source
            srcset="
              ${strDrinkThumb} 1x,
              ${strDrinkThumb} 2x
            "
            media="(max-width: 1280px)"
            type="image/png"
          />
          <source
            srcset="
              ${strDrinkThumb} 1x,
              ${strDrinkThumb} 2x
            "
            media="(max-width: 768px)"
            type="image/png"
          />
          <source
            srcset="
              ${strDrinkThumb} 1x,
              ${strDrinkThumb} 2x
            "
            media="(max-width: 480px)"
            type="image/png"
          />

          <img
            src="${strDrinkThumb}"
            alt="${strDrink}"
          />
        </picture>

        <h3 class="gallery__coctail_box-name">${strDrink}</h3>
        <div class="gallery__coctail_box-buttons">
          <button class="button__learn">Learn More</button>

          <button class="button__add">
            Add to
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"/>
<path d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z" fill="#FCFCFC"/>
</svg>
<div class="coctailsId visually-hidden">${idDrink}</div>
          </button>
        </div> 
      </li>
`;
};
  
export const formatScreenRender =  (yourFetchFunction) => {
    if (window.matchMedia("(min-width: 1280px)").matches) {
        for (let i = 0; i < counter.desktop; i++) {
            yourFetchFunction(i);
        }
        
    }

    else if (window.matchMedia("(min-width: 768px)").matches) {
        for (let i = 0; i < counter.tablet; i++) {
            yourFetchFunction(i);
        }
      
    }
    else if (window.matchMedia("(max-width: 480px)").matches) {
        for (let i = 0; i < counter.mobile; i++) {
            yourFetchFunction(i);
        }
        
    } else {
        

    }
};

export const cleanHTML = () => {
    point.galleryUl.innerHTML = '';
};

export const cleanPagination = () => {
  point.paginationDiv.innerHTML = "";
};

// FOR LOCAL STORAGE //

export const saveInLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const loadFromLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export function itemsPerScreen () {
    let itemsPerPage = 0;
  if (window.matchMedia("(min-width: 1280px)").matches) {
    itemsPerPage = counter.desktop;
  } else if (window.matchMedia("(min-width: 768px)").matches) {
itemsPerPage = counter.tablet;
  } else if (window.matchMedia("(max-width: 480px)").matches) {
itemsPerPage = counter.mobile;
  }
  return itemsPerPage;
}
console.log('Global functions');