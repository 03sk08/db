'use strict';

window.alert('悟空　ベジータ　ヤムチャ　クリリン　チチ　ブルマ　亀仙人　フリーザ　ブウ　18号　から選んでね！')

if(window.confirm('DBのキャラクター？')) {
  //console.log('全員');
  if(window.confirm('オスである')) {
    //console.log('悟空、ベジータ.ヤムチャ、クリリン、亀仙人、フリーザ、ブウ');
    if(window.confirm('何かしら必殺技がある')) {
      //console.log('悟空、ベジータ、ヤムチャ、クリリン、亀仙人、フリーザ、ブウ');
      if(window.confirm('サイヤ人？')) {
        //console.log('悟空、ベジータ');
        if(window.confirm('結婚している')) {
          //console.log('悟空、ベジータ');
          if(window.confirm('主人公？')) {
            //console.log('悟空');
            document.getElementById('db').textContent = ('悟空'); 
          } else {
            //console.log('ベジータ');
            document.getElementById('db').textContent = ('ベジータ');
          }
        } else {
          document.getElementById('error').textContent = ('間違っています');
        }
      } else if(window.confirm('人？')) {
        //console.log('ヤムチャ、クリリン、亀仙人')
        if(window.confirm('サイバイマンに恨みがある')) {
          //console.log('ヤムチャ');
          document.getElementById('db').textContent = ('ヤムチャ');
        } else if(window.confirm('パフパフが好き')) {
          //console.log('亀仙人');
          document.getElementById('db').textContent = ('亀仙人');
        } else {
          //console.log('クリリン');
          document.getElementById('db').textContent = ('クリリン');
        }
      } else if(window.confirm('戦闘力５３万？')) {
        //console.log('フリーザ');
        document.getElementById('db').textContent = ('フリーザ');
      } else {
        //console.log('ブウ');
        document.getElementById('db').textContent = ('ブウ');
      }
    } else {
      document.getElementById('error').textContent = ('間違っています');
    }
  } else if(window.confirm('結婚している')) {
    //console.log('チチ、ブルマ、18号');
    if(window.confirm('子供がいる？')) {
      //console.log('チチ、ブルマ、18号')
      if(window.confirm('2人以上子供がいる')) {
        //console.log('チチ');
        document.getElementById('db').textContent = ('チチ');
      } else if(window.confirm('初期から登場している')) {
        //console.log('ブルマ');
        document.getElementById('db').textContent = ('ブルマ');
      } else {
        //console.log('18号');
        document.getElementById('db').textContent = ('18号');
      }
    } else {
      document.getElementById('error').textContent = ('間違っています');
    }
  } else {
    document.getElementById('error').textContent = ('間違っています');
  }
} else {
  document.getElementById('error').textContent = ('間違っています');
}