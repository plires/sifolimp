import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'

import './styles.css'

export default function Share() {
  const styles = { fill: 'black', transition: 'all ease-in-out .3s' }
  return (
    <>
      <div className='share'>
        <h3>Compartir</h3>
        <div>
          <WhatsappShareButton
            className='transition'
            url={window.location.href}
          >
            <WhatsappIcon size={32} round={true} bgStyle={styles} />
          </WhatsappShareButton>
          <EmailShareButton className='transition' url={window.location.href}>
            <EmailIcon size={32} round={true} bgStyle={styles} />
          </EmailShareButton>
          <TwitterShareButton className='transition' url={window.location.href}>
            <TwitterIcon size={32} round={true} bgStyle={styles} />
          </TwitterShareButton>
          <FacebookShareButton
            className='transition'
            url={window.location.href}
          >
            <FacebookIcon size={32} round={true} bgStyle={styles} />
          </FacebookShareButton>
          <LinkedinShareButton
            className='transition'
            url={window.location.href}
          >
            <LinkedinIcon size={32} round={true} bgStyle={styles} />
          </LinkedinShareButton>
          <PinterestShareButton
            className='transition'
            url={window.location.href}
          >
            <PinterestIcon size={32} round={true} bgStyle={styles} />
          </PinterestShareButton>
          <TelegramShareButton
            className='transition'
            url={window.location.href}
          >
            <TelegramIcon size={32} round={true} bgStyle={styles} />
          </TelegramShareButton>
        </div>
      </div>
    </>
  )
}
