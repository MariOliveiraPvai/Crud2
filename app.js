angular
	.module("app" , ["ng-route"])
	.controller("ProdutoController", ProdutoController)
	.config(RouteConfig)

	function RouteConfig($RouteProvider) {
		$RouteProvider
		.when("/salvar" {
			templateUrl: "salvarProduto.html",
			controller: "ProdutoController"
		})
		.when("/alterar" {
			templateUrl: "alterar.html",
			controller: "ProdutoController"
		}
		.when("/excluir" {
			templateUrl: "excluir.html",
			controller: "´ProdutoController"
		}

	}

	function ProdutoController($scope) {
		$scope.produto=[];
		$scope.produtos={};
	}

	$scope.salProduto= function(produto) {
		CopiaProduto=angular.copy(produto);

		ProdutosRepetidos= $scope.produtos.filter(p => p.id == produto.id);

		if(ProdutosRepetidos.length==0) {
			$scope.produtos.push(CopiaProduto);
		}else{
			alert("Prooduto ja tem um id!");
		}

	$scope.excluirProduto = function(produto) {
		var pos = $scope.produtos.IndexOf(produto);

		$scope.produtos.slice(1, pos);
	}

	$scope.alterarProduto = function(produto) {
		cor.nome=prompt("Insira um novo nome para a cor", cor.nome);
		location("/");
	}
	}