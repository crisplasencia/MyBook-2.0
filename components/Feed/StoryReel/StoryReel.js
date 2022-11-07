import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';

//const img =
  //'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        profileSrc="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        title="Vicente Vargas"
      />
      <Story
        image="https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587497063492-3M55NJG231XKWL9PLFL2/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMinutes+To+Midnight.jpg?format=1000w"
        profileSrc="https://cdn-icons-png.flaticon.com/512/194/194938.png"
        title="Darlene Sanz"
      />
      <Story
        image="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"
        profileSrc="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png"
        title="Hamlet P."
      />
      <Story
        image="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
        profileSrc="https://scontent.fhex5-2.fna.fbcdn.net/v/t39.30808-6/268880285_1933564773482222_3567611247264061489_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=tz7G6KP0ZacAX-72ULX&_nc_ht=scontent.fhex5-2.fna&oh=00_AT9pk2TW-G5gbxWWHmrbb4y9OGh30chF0H-FVqi5XpKxaw&oe=6348A9BE"
        title="Cristian Plasencia"
      />
      <Story
        image="https://wallpaperaccess.com/full/51364.jpg"
        profileSrc="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
        title="Maria Sanchez"
      />
    </div>
  );
}

export default StoryReel;
