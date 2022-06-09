import ImgAsset from '../../assets';
import './style.scss';

function Home() {
  return (
		<div className='Frame1_1_Frame1'>
			<div className='Group2'>
				<div className='Group1'>
					<div className='Ellipse1'/>
				</div>
				<div className='Ellipse2'/>
			</div>
			<span className='EDUVERSE'>EDUVERSE</span>
			<img className='Vector1' src = {ImgAsset.Frame1_1_Vector1} />
			<img className='EDUVERSE_1' src = {ImgAsset.Frame1_1_EDUVERSE_1} />
			<img className='Everydayremovebg1' src = {ImgAsset.Frame1_1_Everydayremovebg1} />
			<img className='removal1' src = {ImgAsset.Frame1_1_removal1} />
			<img className='removal2' src = {ImgAsset.Frame1_1_removal2} />
			<img className='Vector2' src = {ImgAsset.Frame1_1_Vector2} />
			<img className='Vector3' src = {ImgAsset.Frame1_1_Vector3} />
			<span className='MANGTRINGHIMMETAVERSENGIODC'>MANG TRẢI NGHIỆM METAVERSE ĐẾN GIÁO DỤC</span>
			<div className='Frame3'>
				<span className='KHMPHNGAY'>KHÁM PHÁ NGAY</span>
			</div>
			<span className='KHMPHNGAY_1'>KHÁM PHÁ NGAY</span>
			<span className='WHITEPAPER'>WHITE PAPER</span>
			<img className='Vector4' src = {ImgAsset.Frame1_1_Vector4} />
		</div>
	);
}

export default Home;
