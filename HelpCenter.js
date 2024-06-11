import './HelpCenter.css';

function HelpCenter(){
    return(
        <div className='help'>
            <h2>How can we help you?</h2>
            <div className='search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' placeholder='Search help articles...'></input>
            </div>
            <h3>Popular Topics</h3>
            <div className='card'>
                <div className='card1'>
                    <img src='https://static.xx.fbcdn.net/assets/?revision=1431132240730458&name=Illustrations-Get-Started&density=1'></img>
                    <h4>Get Started</h4>
                    <p>Learn how to get started with using WhatsApp.</p>
                </div>
                <div className='card1'>
                    <img src='https://static.xx.fbcdn.net/assets/?revision=1431132240730458&name=Illustrations-Security&density=1'></img>
                    <h4>Safety and Security</h4>
                    <p>Your privacy and security are important. Learn how to stay safe on WhatsApp.</p>
                </div>
                <div className='card1'>
                    <img src='https://static.xx.fbcdn.net/assets/?revision=1431132240730458&name=Illustrations-Backup&density=1'></img>
                    <h4>Back Up or Restore Chat</h4>
                    <p>Learn how to back up and restore your chat history.</p>
                </div>
            </div><br></br>
            <div className='card'>
                <div className='card1'>
                    <img src='https://static.xx.fbcdn.net/assets/?revision=1431132240730458&name=Illustrations-Stay-Safe&density=1'></img>
                    <h4>Information for Teens</h4>
                    <p>Learn more about information for teens on WhatsApp.</p>
                </div>
                <div className='card1'>
                    <img src='https://static.xx.fbcdn.net/assets/?revision=1431132240730458&name=Illustrations-Communities&density=1'></img>
                    <h4>Communities</h4>
                    <p>Learn how to create and participate in communities.</p>
                </div>
                <div className='card1'>
                    <img src='https://static.xx.fbcdn.net/assets/?revision=1431132240730458&name=Illustrations-Business&density=1'></img>
                    <h4>Business Features</h4>
                    <p>Learn about WhatsApp's business solutions and how to get started.</p>
                </div>
            </div>
        </div>
    )
}
export default HelpCenter;