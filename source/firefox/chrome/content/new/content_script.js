var senadores = [
	"Acir Gurgacz",
	"Aloysio Nunes",
	"Alvaro Dias",
	"Ana Amélia",
	"Antonio Anastasia",
	"Antonio Carlos Valadares",
	"Ataídes Oliveira",
	"Aécio Neves",
	"Benedito de Lira",
	"Cidinho Santos",
	"Ciro Nogueira",
	"Cristovam Buarque",
	"Cássio Cunha Lima",
	"Dalirio Beber",
	"Davi Alcolumbre",
	"Dário Berger",
	"Edison Lobão",
	"Eduardo Amorim",
	"Eduardo Braga",
	"Eduardo Lopes",
	"Eunício Oliveira",
	"Fernando Bezerra Coelho",
	"Fernando Collor de Mello",
	"Flexa Ribeiro",
	"Garibaldi Alves Filho",
	"Gladson Cameli",
	"Hélio José",
	"Ivo Cassol",
	"Jader Barbalho",
	"José Agripino",
	"José Aníbal",
	"José Maranhão",
	"José Medeiros",
	"João Alberto Souza",
	"Lasier Martins",
	"Lúcia Vânia",
	"Magno Malta",
	"Maria do Carmo Alves",
	"Marta Suplicy",
	"Omar Aziz",
	"Paulo Bauer",
	"Pedro Chaves",
	"Raimundo Lira",
	"Reguffe",
	"Renan Calheiros",
	"Ricardo Ferraço",
	"Roberto Rocha",
	"Romero Jucá",
	"Romário",
	"Ronaldo Caiado",
	"Rose de Freitas",
	"Simone Tebet",
	"Sérgio Petecão",
	"Tasso Jereissati",
	"Telmário Mota",
	"Valdir Raupp",
	"Vicentinho Alves",
	"Waldemir Moka",
	"Wellington Fagundes",
	"Wilder Morais",
	"Zeze Perrella"
];

function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(new RegExp('\\b' + 'Temer' + '\\b', 'gi'), 'Golpista');
	v = v.replace(new RegExp('\\b' + 'Golpista Golpista' + '\\b', 'gi'), 'Temer Golpista');
	v = v.replace(/\bMichel Golpista\b/g, "Temer Golpista");
	v = v.replace(/\bMICHEL TEMER\b/g, "TEMER GOLPISTA");
	v = v.replace(/\bMichel Temer\b/g, "Temer Golpista");
	v = v.replace(/\bmichel temer\b/g, "temer golpista");
	v = v.replace(/\bPresidente Interino\b/g, "Presidente Sem Voto");
	v = v.replace(/\bPresidente do Brasil desde 2016\b/g, "Presidente Golpista e Sem Voto do Brasil desde 2016");
	v = v.replace(/\bpresidente interino Michel Golpista\b/g, "presidente sem voto");
	v = v.replace(/\bMichel Miguel Elias Golpista Lulia\b/g, "Temer Golpista");
	v = v.replace(/^Michel Miguel Elias Temer Lulia$/g, "Presidente Golpista");
	v = v.replace(/\bmichel miguel elias temer lulia\b/g, "presidente golpista");
	v = v.replace(/\bPRESIDENTE MICHEL TEMER\b/g, "PRESIDENTE GOLPISTA SEM VOTO");
	v = v.replace(/\bPresidente Michel Temer\b/g, "Presidente Golpista Sem Voto");
	v = v.replace(/\bpresidente michel temer\b/g, "presidente golpista sem voto");
	v = v.replace(/\bVice-presidente Michel Temer\b/g, "Vice-decorativo e golpista");
	v = v.replace(/\bVice-Presidente Michel Temer\b/g, "Vice-decorativo e golpista");
	v = v.replace(/\bvice-presidente Michel Temer\b/g, "Vice-decorativo e golpista");
	v = v.replace(/\bvice-presidente Michel Temer\b/g, "Vice-decorativo e golpista");
	v = v.replace(/\bpresidente interino da República Federativa do Brasil\b/g, "presidente golpista sem voto da República Federativa do Brasil");
//	v = v.replace(/\.( )*\bTemer\b/g, "Temer Golpista");
	v = v.replace(/\b37º Presidente do Brasil\b/g, "Presidente Golpista e Sem Voto do Brasil");
	v = v.replace(/\bPresidente Temer\b/g, "Presidente Golpista e Sem Voto Temer");
	v = v.replace(/\bpresidente temer\b/g, "presidente golpista e sem voto temer");

	v = v.replace(/\bMarcela Golpista\b/g, "Bela, Recatada e do Lar");

	v = v.replace(/\bEDUARDO CUNHA\b/g, "CUNHA GOLPISTA");
	v = v.replace(/\bEduardo Cunha\b/g, "Cunha Golpista");
	v = v.replace(/\bEduardo Cosentino da Cunha\b/g, "Cunha Golpista");
	v = v.replace(/\beduardo cosentino da cunha\b/g, "cunha golpista");


	var i = senadores.length;

	while (i--) {
        if (v.indexOf("Golpista") == -1)
            v = v.replace(new RegExp('\\b' + senadores[i] + '\\b', 'gi'), senadores[i] + ' (Golpista)');
    }

	/*Images !!!! 1 k de shares*/
	/*v = v.replace(/\bhttp://css.og.infg.com.br/1470152878/img/logo.png\b, "http://temergolpista.greve.xyz/img/o_globo.png");*/


	textNode.nodeValue = v;
}

walk(document.body);

new MutationObserver(function() {
	walk(document.body);
}).observe(document.body, {
	childList: true
});
