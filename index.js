module.exports = function aceDungeons(dispatch) {
	
	let CID = null;
	
	let baracosX = 16921;
	let baracosY = 177244;
	let baracosZ = -1664;
	
	let akashaX = 68482;
	let akashaY = 125779;
	let akashaZ = 776;
	
	dispatch.hook('S_LOGIN', 1, event => {
		CID = event.cid;
	})
	
	dispatch.hook('S_SPAWN_ME', 1, event => {
		if(baracosX == event.x && baracosY == event.y && baracosZ == event.z)
		{
			baracosTele();
			return false;
		}

		if(akashaX == event.x && akashaY == event.y && akashaZ == event.z)
		{
			akashaTele();
			return false;
		}
	})
	
	function baracosTele()
	{
		dispatch.toClient('S_SPAWN_ME', 1, {
			target: CID,
			x: 28175.435546875,
			y: 179472.1875,
			z: -1675.3272705078125,
			w: -16918,
			alive: 1,
			unk: 0
		})
	}
	
	function akashaTele()
	{
		dispatch.toClient('S_SPAWN_ME', 1, {
			target: CID,
			x: 72421.5078125,
			y: 133758.65625,
			z: -502.7822570800781,
			w: 15548,
			alive: 1,
			unk: 0
		})
	}
}
