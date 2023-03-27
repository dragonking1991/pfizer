import BaseModule from './BaseModule'
import axios from 'axios'
export default class DisplayLeaderBoard extends BaseModule {

  async register() {
    await axios({
      url: 'https://us-central1-test-c1a7a.cloudfunctions.net/api/v1/leaderboard/0EejNWFdxllT92ZWmByW?top=10',
      method: 'GET',
      headers: {
        "x-api-key": "2GB3VQI-KLQUVKI-QKXS67Q-KIKL55Q",
      },
    }).then(result => {
      const users = result.data.users
      const sortedUsers = users.sort((a, b) => b.score - a.score);
      console.log('sortedUsers', sortedUsers);

      let listHtml = ''
      sortedUsers.forEach((user, idx) => {
        if (idx < 10) {
          listHtml += ` <li>
              <div><span class="number">${idx + 1}</span></div>
              <div class="inner">
                <span>${user.username}</span>
                <span class="country">${user.country || '_'}</span>
                <span class="speciality">${user.speciality || '_'}</span>
                <span>${user.score}</span>
              </div>
            </li>`
        }
      });

      document.querySelectorAll('.leader-list').forEach(list => {
        list.innerHTML = listHtml
      })

    }).catch((error) => {
      console.log(error);
    })
  }

}
