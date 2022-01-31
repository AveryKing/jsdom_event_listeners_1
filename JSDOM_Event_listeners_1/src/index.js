import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
    document.querySelectorAll('.expand_button')
        .forEach(button => {
            button.addEventListener('click', () => {
                let article = button.closest('article');
                let articleBody = article.getElementsByClassName('article_body')[0];
                if (button.textContent !== 'V') {
                    articleBody.style.display = 'block';
                    button.textContent = 'V';
                } else {
                    articleBody.style.display = 'none';
                    button.textContent = '>';
                }
            })
        })
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
    document.querySelectorAll('.highlightBtn')
        .forEach(button => {
          button.addEventListener('click', () => {
            let article = button.closest('article');
            if(button.textContent !== '+') {
              button.textContent = '+';
              article.classList.remove('highlight');
            } else {
              button.textContent = '-';
              article.classList.add('highlight');
            }
          })
        })
}

function main() {
    expandArticleBody();
    highlightArticle();
}

main();
