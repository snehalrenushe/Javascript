
            function Change_Background_Color() {
              let color;
              color = document.getElementById('InputColor').value;
              document.body.style.backgroundColor = color;

              document.getElementById('InputText').value = color;
            }
