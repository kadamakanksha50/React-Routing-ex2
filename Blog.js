import './Blog.css';

function Blog(){
    return(
        <div className='blog'>
            <div className='title'>
                <h1>WhatsApp Blog</h1>
                <p>Voice messages just got more private</p>
            </div>
            <div className='photo'>
                <img src='https://scontent.whatsapp.net/v/t39.8562-34/406744186_7066826953369282_2439718825866184712_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=RFgin5uBIw0AX9QdjAg&_nc_ht=scontent.whatsapp.net&oh=01_AdSI_MKybx_vFD-DCNBSHrZARZy4l8FEd_i572rwJ6LSpg&oe=6603ED7D'></img>
                <p>You can now send a voice message that will disappear once listened to on WhatsApp.</p>
            </div>
        </div>
    )
}
export default Blog;