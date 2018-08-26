<script>
import hello from 'hellojs';
export default {
  name: 'importContacts',
  // https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=837fe74f-e66b-441f-8728-088de9fc6670&redirect_uri=https://192.168.0.12:8080&response_type=token&scope=Contacts.Read

  // https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=837fe74f-e66b-441f-8728-088de9fc6670&redirect_uri=https://192.168.0.12:8080&response_type=code&response_mode=query&scope=Contacts.Read

  // https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=837fe74f-e66b-441f-8728-088de9fc6670&redirect_uri=oob&response_type=token&scope=Contacts.Read

  data() {
    return {
      clientId: '837fe74f-e66b-441f-8728-088de9fc6670',
      popup: undefined,
      token: undefined,
      tokenGetedStorage: undefined,
      resposta: [],
      local: undefined
    };
  },
  mounted() {
    let item = localStorage.getItem('hello');
    this.local = JSON.parse(item);

    // console.log('​mounted -> ', 'wtffffff');
    // let urlWindow = window.location.href;
    // if (urlWindow.search('access_token') !== -1) {
    //   let url = new URL(urlWindow);
    //   this.token = url.hash
    //     .replace('&token_type=bearer&expires_in=3600&scope=Contacts.Read', '')
    //     .replace('#access_token=', '');
    //   localStorage.setItem('tokenMicrosofttt', this.token);
    // }
    // if (localStorage.getItem('tokenMicrosofttt') !== undefined) {
    //   this.tokenGetedStorage = localStorage.getItem('tokenMicrosoft');
    // }
  },
  methods: {
    outroTeste() {
      // let popup = window.open(
      //   'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=837fe74f-e66b-441f-8728-088de9fc6670&redirect_uri=http://localhost:8080&response_type=token&scope=Contacts.Read',
      //   '',
      //   'width=350, height=255, top=100, left=110, scrollbars=no '
      // );
      // let teste = setInterval(() => {
      //   if (popup.closed) {
      //     console.log('Fechada');
      //     console.log(popup);
      //     clearInterval(teste);
      //   } else {
      //     console.log(popup);
      //     console.log('aberta');
      //   }
      // }, 2000);
      hello.init(
        {
          windows: this.clientId
        },
        {
          redirect_uri: 'http://localhost:8080',
          scope: 'Contacts.Read'
        }
      );
      hello('windows')
        .login({ scope: 'Contacts.Read' })
        .then(
          function(auth) {
            // Get the friends
            // using path, me/friends or me/contacts
            hello('windows')
              .api('me/contacts')
              .then(function responseHandler(r) {
                for (var i = 0; i < r.data.length; i++) {
                  var o = r.data[i];
                  console.log(o)
                }

              });
          },
          function() {
            if (!auth || auth.error) {
              console.log('Signin aborted');
              return;
            }
          }
        );
    },
    runMicrosoft() {
      var client = MicrosoftGraph.Client.init({
        authProvider: done => {
          done(null, this.tokenNew);
        }
      });

      client.api('/me/contacts?$select=emailaddresses').get((err, res) => {
        this.resposta = res;
        console.log(res);
      });
    }
  }
};
</script>