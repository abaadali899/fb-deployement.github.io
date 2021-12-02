import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
            image='https://w7.pngwing.com/pngs/51/881/png-transparent-programmer-source-code-computer-computer-computer-program-computer-programming-thumbnail.png '
            profileSrc= 'https://www.pngitem.com/pimgs/m/501-5017607_programmer-png-clipart-computer-programming-software-programmer-cartoon.png '
            title='joe'
            />
             <Story 
            image=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGARrto9Dk0zm8F-DpvaC7aap3rpwpKujeb14vmGxc3IEtEzdtw-Wac1giVv-QtvE1Qvg&usqp=CAU'
            profileSrc= ' https://i.zoomtventertainment.com/story/beard_styles.jpg?tr=w-400,h-300,fo-auto'
            title='Sunney'
            />
             <Story 
            image='https://pngimg.com/uploads/businessman/businessman_PNG6588.png'
            profileSrc= ' https://pngimg.com/uploads/businessman/businessman_PNG6572.png'
            title='Fredrick'
            />
             <Story 
            image=' https://c8.alamy.com/comp/DR8BNN/young-woman-taking-a-selfie-on-an-apple-iphone-DR8BNN.jpg'
            profileSrc= ' https://cdn.idropnews.com/wp-content/uploads/2020/06/08092134/woman-taking-selfie-with-iPhone-11-Pro.jpg'
            title='Loara'
            />
            <Story 
            image=' https://image.shutterstock.com/image-photo/young-woman-having-fun-nature-260nw-775242286.jpg'
            profileSrc= 'https://cdn.pixabay.com/photo/2014/10/15/02/33/selfie-489119_1280.jpg'
            title='Angleina'
            />
            
        </div>
    )
}

export default StoryReel;
