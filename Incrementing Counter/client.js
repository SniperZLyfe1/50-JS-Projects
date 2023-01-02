const twitter_counter = document.querySelector('.twitter-counter')
const youtube_counter = document.querySelector('.youtube-counter')
const facebook_counter = document.querySelector('.facebook-counter')

//Social Media Total Amounts --> Change here
const twitter_amount = 12000;
const youtube_amount = 5000;
const facebook_amount = 7500;

let twitter_counting = 0;
const twitter_interval = setInterval(() => {
    twitter_counting += twitter_amount/200;
    twitter_counter.innerHTML = Math.ceil(twitter_counting)
    if(twitter_counting >= 12000) clearInterval(twitter_interval)
}, 1);


let youtube_counting = 0;
const youtube_interval = setInterval(() => {
    youtube_counting += youtube_amount/200;
    youtube_counter.innerHTML = Math.ceil(youtube_counting)
    if(youtube_counting >= 5000) clearInterval(youtube_interval)
}, 1);


let facebook_counting = 0;
const facebook_interval = setInterval(() => {
    facebook_counting+= facebook_amount/200;
    facebook_counter.innerHTML = Math.ceil(facebook_counting)
    if(facebook_counting >= 7500) clearInterval(facebook_interval)
}, 1);