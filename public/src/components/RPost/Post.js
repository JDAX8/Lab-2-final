class rpost extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        return ["username", "hoursSincePost", "postText", "postImage","postTitle"];
      }
    attributeChangedCallback(propname, oldValue, newValue) {
          this[propname] = newValue;
          this.render();
        }


    connectedCallback(){
        this.render();
    }


    render(){
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href="./src/components/RPost/Post.css">
        <div class="post">
        <section class="reddit-wrap">
          <div class="post-header">
            <div class="post-title">
              <a href="#">Profe ponenos 5</a>
            </div>
            <div class="post-subtitle">
              <span class="post-subreddit">Jramriezzz</span>
              <span class="post-divider">|</span>
              <span class="post-author">Jramirezzz</span>
              <span class="post-divider">|</span>
              <span class="post-timestamp">1 hour ago</span>
            </div>
          </div>
          <div class="post-content">
            Contenido del post
            <img class="reddit-image" src="https://pbs.twimg.com/media/Fq0XTM7WYAA4e7W?format=jpg&name=large" alt="">
          </div>
          <div class="post-imag">
          
        </div>
          <div class="post-footer">
            <div class="post-score">
              <span class="post-upvote">&#9650;</span>
              <span class="post-downvote">&#9660;</span>
              <span class="post-score-number">123</span>
            </div>
            <div class="post-comments">
              <a href="#">12 comentarios</a>
            </div>
          </div>
        </section>
        </div>
        `
        
    }
}

customElements.define('reddit-post', rpost);
export default rpost;