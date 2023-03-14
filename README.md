<h2 align="left">Sobre o projeto</h2>

<p align="left">Rest API para criar usuário e autenticação de login com JWT</p>

<h5 align="left">COMO RODAR O PROJETO BAIXADO</h5>

<p align="left">Instalar todas as dependencias indicada pelo package.json<br>🪶 npm install<br><br>Rodar o projeto<br>🪶 npm start<br><br>Rodar o projeto usando o nodemon <br>🪶 nodemon index.js</p>

<h5 align="left">ROTAS</h5>

<p align="left"><span style="display: block; padding: 5px 8px; background-color: #F13030">POST |</span>  Login com retorno de token<br><br><strong>http://localhost:3000/admin/users/login</strong><br><br><i>{ "MAIL" : "", "PASSWORD" : "" }</i></p>

<div class="highlight highlight-text-shell-session notranslate position-relative overflow-auto" dir="auto"><pre>$ <span class="pl-s1">npm install</span></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="$ npm install" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>
    </clipboard-copy>
  </div>
</div>

<p align="left"><span style="display: block; padding: 5px 8px; background-color: #F13030">GET |</span> Buscar usuários<br><br><strong>http://localhost:3000/admin/users/</strong><br><br><i>{ "id" : "" }</i></p>

<p align="left"><span style="display: block; padding: 5px 8px; background-color: #F13030">POST |</span> Cadastrar usuário<br><br><strong>http://localhost:3000/admin/users/</strong><br><br><i>{ "NAME" : "", "MAIL" : "", "PASSWORD" : "" }</i></p>

<p align="left"><span style="display: block; padding: 5px 8px; background-color: #F13030">PUT |</span> Alterar usuário<br><br><strong>http://localhost:3000/admin/users/</strong><br><br><i>{ "ID" : "", "NAME" : "", "MAIL" : "", "PASSWORD" : "" }</i></p>

<p align="left"><span style="display: block; padding: 5px 8px; background-color: #F13030">DELETE |</span> Deletar usuário usuário<br><br><strong>http://localhost:3000/admin/users/<strong><br><br><i>{ "ID" : "" }</i></p>

<h2 align="left">Techs</h2>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" height="40" width="52" alt="mysql logo"  />
  <img src="https://jwt.io/img/logo.svg" height="40" width="52" alt="mysql logo"  />
</div>
