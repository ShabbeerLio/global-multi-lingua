import React from 'react'
import "./Services.css"
import ServicesRight from './ServicesRight'
import TranscriptionData from './TranscriptionData'
import timg from "../../Assets/Services/transcription.jpg"


const Transcription = () => {
    return (
        <div className='Services'>
                        <img src={timg} alt="" />
            <div className='Services-main'>
                <div className='Services-box'>
                    <div className='Services-left'>
                        <h1>Transcription Services</h1>
                        <p> Transcription is the art  of listening to speech and converting it into a written document. The term  transcription refers to the process by which video or audio resources are  transferred into a text format for indexing, approachability or archival purpose.  Transcription techniques are used in various spheres and different fields  including law enforcement, musical performance and for various business  purposes. Technological advances and inventions have made transcription works  easier and more efficient by providing advanced ways to record the original  material and to produce clear, readable transcripts for business purposes. </p>
                        <p>A permanent written record of audio  files provides an invaluable resource which provides boost to legal and  technical issues.  It allows meetings and  events to be searched for key terms and titles.   It is much quicker to read through a document than listening through the  entire audio and listening to audio is also time-taking.  The poor-quality of audios can be quite  cumbersome and challenging to listen through, but reading a well-written  document is convenient.  Transcripts  never depreciate in value, and get worn down, or are always at risk of being  lost. The digitally-written words last forever and can be used forever.</p>
                        <p> Many professionals require  transcripts, including doctors, those in the film industries, legal field,  radio programs, or speech or lecturers.   This is because of their requirements to have a certified written copy  of the spoken events available for references. The podcaster now chooses to  publish transcripts of their contents on line because the written word can be  found by search engines and can also be easily quoted on websites and blogs. The  closed subtitling and captioning are other aspects of transcribing that most  are familiar with and often used.  It  saves time and hassle to have important meetings transcribed, allowing executives  to review notes to ensure they have not missed any crucial points which are  very important.</p>
                        <p> It has never been easier  to record thoughts and ideas. Essays, memoirs, individual thoughts, novels, and  e-books are easily written without worrying about editing, typing, and  typesetting thanks to digital recorders.</p>
                        <p>At GMLS we employ the  industry-standard ExpressScribe player to play audio and video files and  convert them into MS Word or Word document.   We understand the nuances and difficulties of audio files and know how  to handle the inaudible audio and do the diligence required in researching  proper names and nouns. At Global Multilingua Services, we provide all type of  transcription services. We have the group of well qualified and professional in  all Indian, European and Asian languages. </p>
                        <p> We are one of the best Transcription Services Providers in Delhi and offering our  Transcription Services in Noida, Mumbai, Gurgaon, Pune, Kolkata,  Surat, Bangalore, Chennai, Hyderabad (South India).</p>
                    </div>
                    <div className='Services-right'>
                        <ServicesRight title={"Transcription"} languages={TranscriptionData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transcription
