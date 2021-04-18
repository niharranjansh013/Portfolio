const readMoreBtn=document.querySelector('.read-more-btn');
const text=document.querySelector('#row');
readMoreBtn.addEventListener('click',function(e)
{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText==='Read More')
    {
        readMoreBtn.innerText='Read Less';
    }
    else
    {
        readMoreBtn.innerText='Read More';
    }
})

const readMoreBtn2=document.querySelector('.read-more-btn2');
const text2=document.querySelector('#para');
readMoreBtn2.addEventListener('click',function(e)
{
    text2.classList.toggle('show-more');
    if(readMoreBtn2.innerText==='Read More')
    {
        readMoreBtn2.innerText='Read Less';
    }
    else
    {
        readMoreBtn2.innerText='Read More';
    }
})


const readMoreBtn3=document.querySelector('.read-more-btn3');
const text3=document.querySelector('#para1');
readMoreBtn3.addEventListener('click',function(e)
{
    text3.classList.toggle('show-more');
    if(readMoreBtn3.innerText==='Read More')
    {
        readMoreBtn3.innerText='Read Less';
    }
    else
    {
        readMoreBtn3.innerText='Read More';
    }
})