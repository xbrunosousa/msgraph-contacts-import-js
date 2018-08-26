<script>
export default {
  name: 'importContacts',
  data() {
    return {
      clientId: '837fe74f-e66b-441f-8728-088de9fc6670',
      token: undefined,
      local: undefined,
    };
  },
  mounted() {},
  methods: {
    microsoftGo() {
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
          setTimeout(() => {
            this.local = JSON.parse(item);
            console.log(this.local);
            console.log(res);
            let item = localStorage;
          }, 500);
        })
        .finally(() => {
          setTimeout(() => {
            this.token = JSON.parse(localStorage.getItem('windows')).access_token;
            this.runMicrosoft();
          }, 500);
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