const Footer01 = () => {
    return (<div className="container-fluid" >
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top  justify-content-between">
        <div className="col-4 mb-4 w-auto">
          <iframe name="f2bcf5254be2e18" width="342px" height="150px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder="0" allowtransparency="true" allowFullScreen scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.10/plugins/page.php?app_id=511060513256789&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2e8500d08f21cc%26domain%3Dwww.simurgh.cc%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.simurgh.cc%252Ff21490b3d2ef2b%26relation%3Dparent.parent&amp;container_width=378&amp;height=130&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FSimurghTaiwan&amp;locale=zh_TW&amp;sdk=joey&amp;show_facepile=false&amp;show_posts=false&amp;width=342" data-gtm-yt-inspected-15="true" className=""></iframe>
          {/* style="border: none; visibility: visible; width: 342px; height: 130px;" */}
          <p className="text-muted">&copy; 2023</p>
        </div>

        <div className="col mb-3">
          <h5>關於我們</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">品牌故事</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">商店簡介</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">隱私權及網站使用條款</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">客服資訊</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">購物說明</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">客服留言</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">會員權益聲明</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">聯絡我們</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>官方APP</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-3">

              {/* <i className="fas fa-laptop fa-fw me-4"><img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/Google_Play_Store_badge_EN.svg.png" alt="Avatar" className="image"/></i> */}
              <a href="https://apps.apple.com/tw/app/id1590292630" className="app-download" >
                <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/app-store.png" alt="" width="30%" height="30%" />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.nineyi.shop.s040984" className="app-download mx-2">
                <img src="https://storage.googleapis.com/asia.artifacts.abstract-arbor-392000.appspot.com/static/playstore.png" alt="" width="30%" height="30%" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>)
  }

export default Footer01()