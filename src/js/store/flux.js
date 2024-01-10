const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],

			elementos: []
		},
		actions: {
			addFavoritos: (elemento) => {
				const store = getStore();
				if (store.favoritos.includes(elemento)) {
					alert("Ya has agregado este elemento a favoritos");
					return
				}
				const updatedFavoritos = [...store.favoritos, elemento];
				setStore({ favoritos: updatedFavoritos });
			},

			deleteFavoritos: (elemento) => {
				const store = getStore();
				const updatedFavoritos = store.favoritos.filter((fav) => fav !== elemento);
				setStore({ favoritos: updatedFavoritos });
			},

			verificarFavorito: (elemento) => {
				const store = getStore();
				if (store.favoritos.includes(elemento)) {
					return true
				}
				return false
			}
		}
	};
};

export default getState;