export default function InfinityString(){
    return(
        <div class="scrolling-text-container">
            <div class="scrolling-text-inner" style={{'--marquee-speed': '20s', '--direction': 'scroll-left'}} role="marquee">
                <div class="scrolling-text">
                    <div class="scrolling-text-item">Your First Announcement</div>
                    <div class="scrolling-text-item">Your First Announcement</div>
                    <div class="scrolling-text-item">Your First Announcement</div>
                    <div class="scrolling-text-item">Your First Announcement</div>
                    <div class="scrolling-text-item">Your First Announcement</div>
                </div>
            </div>
        </div>
    )
}