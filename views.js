let profiles = document.querySelector('#profiles')

profiles.innerHTML += generateGroup("Hacker")
profiles.innerHTML += generateGroup("Hipster")
profiles.innerHTML += generateGroup("Hyper",true)
profiles.innerHTML += generateGroup("Hustler",true)

// essa função retorna o html pra cada perfil
function generateProfile(profile, num){
    let id = profile.stack.toLowerCase()+num

    return /*html*/`
    <!-- Profile -->
    <div class="col-lg-4 col-12">
      <div class="card destacar" id="${id}" onclick="flip(${id})">
        <div class="front">
          <img class="card-img-top" src="images/${profile.image}" alt="Card image cap">
          <div class="card-body text-center" style="background: transparent !important">
          <h2 class="card-title">${profile.name}</h2>
          <p class="card-text">${profile.stack} from ${profile.city}/${profile.uf}</p>
          <a class="btn profile-button" >Informações</a>
          </div>
        </div>
        <div class=" back">
          <div class="text-justify">
            <h5>
              Sonho grande:
              <small class="text-muted">${profile.dream}</small><br />
            </h5>
            <h5>
              O que quero aprender:
              <small class="text-muted">${profile.learn}</small><br />
            </h5>
            <h5>
              O que posso ensinar:
              <small class="text-muted">${profile.teach}</small><br />
            </h5>
            <h5>
              Em um ano estarei:
              <small class="text-muted">${profile.oneyear}</small><br />
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!-- /Profile -->
    `
  }

  // este retorna o html de todo um stack
  function generateGroup(stack, green){
    return /*html*/`
        <h1 style="margin-top:50px" class="stacks-title text-center ${green ? 'green' : ''}" id="${stack.toLowerCase()+'s'}">${stack.toUpperCase()+'S'}</h1>
        <div class="row">
            ${getProfiles(stack)}
        </div>
    `
  }



// retorna todos os perfis de uma stack escolhida

function getProfiles(stack){
  let profiles = ''
  ALUMNIS.filter(alumni => alumni.stack == stack)
  .forEach((person,n) => {
    profiles += generateProfile(person,n)
  });
  return profiles
}
