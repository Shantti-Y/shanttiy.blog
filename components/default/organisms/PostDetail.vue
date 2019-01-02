<template>
  <div class="post-detail">
    <div class="post-header">
      <h1>まともなコードが書けるエンジニアならどこでも海外移住できるという単純な理由</h1>
      <blog-item-list />
      <tag-list />
      <social-button-list />
    </div>
    <div class="post-content">
      <h2>見出しというのはあれだね、どうして小さすぎて読めないことを考慮しないんだ</h2>
      <h3>見出しというのはあれだね、どうして小さすぎて読めないことを考慮しないんだ</h3>
      <h4>見出しというのはあれだね、どうして小さすぎて読めないことを考慮しないんだ</h4>
      <h5>見出しというのはあれだね、どうして小さすぎて読めないことを考慮しないんだ</h5>
      <h6>見出しというのはあれだね、どうして小さすぎて読めないことを考慮しないんだ</h6>
      <p>
        まずちゃんとウェブサービスをスケールさせている人達の中に「１発当てた」なんて人は絶対に居ない。それは不断の努力と度重なる失敗に続く失敗の中で改善を繰り返して到達したのは明らかだ。それを端から眺めて「俺も１発当たらないかなー」なんて、そうして本気でウェブサービスに取り組んでいる方達に対してあまりにも失礼だ。
      </p>
      <p>で、そのイバンカがスマフォを見てクスっと笑った。一体ナニに対してイバンカが笑ったのかは知らない。でもその時「そうだ。俺もそういう誰かを笑顔にするサービスを作ろう」と思った。データベースをチューニングして何ms速くしたところで一体なんだというんだ。究極的には誰かを笑顔にしなければ、わざわざやる意味がない。それがイバンカである必要なんてないし、女である必要もない。別に私のウェブアプリのユーザーがむさ苦しいヲタクの男であっても大歓迎だ。ヲタク野郎好きだし。</p>
      <p>
        スマホアプリ開発をしている
        <em>そこのお前！</em>うるさいぞ
      </p>
      <p>
        アンドロイド開発をしているのは誰だ！
        <strong>ヤバいサラリーマン「</strong>殺す」
      </p>
      <p>
        どうして
        <del>僕らは</del>ヤバいサラリーマン「殺す」
      </p>
      
      <ol>
        <li>あいつはどうしようもない</li>
        <li>あいつはどうしようもない</li>
        <li>あいつはどうしようもない</li>
      </ol>
      <ul>
        <li>あいつはどうしようもない</li>
        <li>あいつはどうしようもない</li>
        <li>あいつはどうしようもない</li>
        <li>あいつはどうしようもない</li>
      </ul>
      <a href="">現場でバリバリコードを書くことのしんどさを教えてくれ</a>
      <img :src="require('@/assets/images/art1.jpg')" alt="">
      <pre>
        <code>
          def fxxk_you
            puts "I kill you!!"
          end
        </code>
      </pre>
      <table>
        <thead>
          <tr>
            <th>web</th>
            <th>vue js</th>
            <th>react</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>使いやすい</td>
            <td>おい</td>
            <td>ザコシショウ</td>
          </tr>
        </tbody>
      </table>
      <blockquote>
        <p>そんしそんしでなかれ、うるせえ！</p>
      </blockquote>
      <hr/>
    </div>
    <div class="social-button-list-bottom">
      <social-button-list />
    </div>
    
  </div>
</template>

<script>
  import Vue from 'vue';
  import BlogItemList from '@/components/default/moleculars/BlogItemList.vue';
  import TagList from '@/components/default/moleculars/TagList.vue';
  import SocialButtonList from '@/components/default/moleculars/SocialButtonList.vue';
  
  export default Vue.extend({
    components: {
      BlogItemList,
      TagList,
      SocialButtonList
    }
  });
</script>

<style lang="scss" scoped>
  .post-detail {
    margin: 15px;
    border-bottom: 1px solid $border;
    .post-header {
      h1 {
        font-size: 25px;
        font-weight: bold;
        padding-bottom: 12px;
        border-bottom: 1px solid $main-text;
        line-height: 140%;
        margin-bottom: 12px;
      }
      ul {
        margin-bottom: 18px;
        li {
          display: inline-block;
        }
      }
    }
    .post-content {
      margin: 55px 0 30px 0;
      h2, h3, h4, h5, h6 {
        margin-bottom: 14px;
      }
      h2 {
        font-size: 22px;
      }
      h3 {
        font-size: 19px;
      }
      h4 {
        font-size: 16px;
      }
      h5 {
        font-size: 13px;
      }
      h6 {
        font-size: 10px;
      }
      p {
        line-height: 175%;
        font-size: 14px;
        margin-bottom: 15px;
      }
      ol, ul {
        margin: 0 0 15px 5%;
        li {
          font-size: 14px;
          margin-bottom: 11px;
        }
      }
      ul {
        list-style: circle;
      }
      a {
        display: inline-block;
        font-size: 14px;
        margin: 0 0 15px 5px;
        color: $link-text;
        text-decoration: underline;
        text-decoration-style: dotted;
        &:hover {
          color: $link-hover;
        }
      }
      img {
        width: 90%;
        max-width: 440px;
        margin: 0 auto 20px auto;
      }
      pre {
        background-color: $code-background;
        margin-bottom: 20px;
        code {
          color: white;
          font-size: 12px;
          line-height: 170%;
        }
      }
      
      table {
        tr {
          * {
            padding: 9px 4px;
            font-size: 14px;
          }
        }
        thead {
          th {
            background-color: #006699;
            color: white;
          }
        }
        tbody {
          td {
            background-color: #cceeff;
          }
        }
      }
      blockquote {
        margin: 12px 0;
        border-left: 2px solid $quoteblock;
        padding: 6px 0;
      
        p {
          padding-left: 9px;
          color: $quoteblock;
          margin-bottom: 0;
        }
      }

      hr {
      }
    }
    .social-button-list-bottom {
      margin: 18px 0 20px 0;
    }
  }
</style>

