<script>
// import hello from 'hellojs-xbrunosousa';
// import * as hello from "./../../assets/js/hello.all.js";
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
      local: undefined,
      oi: undefined
    };
  },
  mounted() {},
  methods: {
    outroTeste() {
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
        .then((res) => {
          this.$snotify.success('Wiiii! 👨‍💻', '');
          this.local = JSON.parse(item);
          console.log(this.local);
          console.log(res);
          let item = localStorage;
        })
        .catch(() => {
          setTimeout(() => {
            // console.clear();
          }, 100);
        })
        .finally(() => {
          console.log('​outroTeste -> ', JSON.parse(localStorage.getItem('windows')));
          this.token = JSON.parse(localStorage.getItem('windows')).access_token;
        });
    },
    runMicrosoft() {
      fetch('https://graph.microsoft.com/beta/me/contacts?$select=emailaddresses', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      }).catch(() => {
        this.$snotify('', 'Deu ruim!');
      })
    }
  }
};
</script>