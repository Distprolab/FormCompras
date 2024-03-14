import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formulario-Compras';
  licencia = [
    { ItemName: 'Parametros reportables modo fluidos corporales' ,value: 'Parametros reportables modo fluidos corporales'},
    { ItemName: 'Parametros reportables canal reticulocitos', value: 'Parametros reportables canal reticulocitos' },
    { ItemName: 'Parametros investigacion canal reticulocitos', value: 'Parametros investigacion canal reticulocitos' }
];
equipos = [
  'QUIMICA',
  'INMUNOLOGIA',
  'HEMATOLOGIA',
  'COAGULACION',
  'GASOMETRIA',
  'ELECTROLITOS',
  'UROANALISIS',
  'MICROBIOLOGIA',
  'POC'
];


  get institucion() {
    return this.RegistroForm?.get('institucion')!.invalid && this.RegistroForm?.get('institucion')!.touched
  }


  get codigo() {
    return this.RegistroForm?.get('codigo')!.invalid && this.RegistroForm?.get('codigo')!.touched
  }

  get linkproceso() {
    return this.RegistroForm?.get('linkproceso')!.invalid && this.RegistroForm?.get('linkproceso')!.touched
  }

  get tiempoconsumo() {
    return this.RegistroForm?.get('tiempoconsumo')!.invalid && this.RegistroForm?.get('tiempoconsumo')!.touched
  }

  get determinacion() {
    return this.RegistroForm?.get('determinacion')!.invalid && this.RegistroForm?.get('determinacion')!.touched
  }

  get presupuesto() {
    return this.RegistroForm?.get('presupuesto')!.invalid && this.RegistroForm?.get('presupuesto')!.touched
  }

  get entregacarpeta() {
    return this.RegistroForm?.get('entregacarpeta')!.invalid && this.RegistroForm?.get('entregacarpeta')!.touched
  }
  get terceraopcion() {
    return this.RegistroForm?.get('terceraopcion')!.invalid && this.RegistroForm?.get('terceraopcion')!.touched
  }

  get sistema() {//observacion
    return this.RegistroForm?.get('sistema')!.invalid && this.RegistroForm?.get('sistema')!.touched
  }
  get observacion() {//observacion
    return this.RegistroForm?.get('observacion')!.invalid && this.RegistroForm?.get('observacion')!.touched
  }
  get equipoprincipal() {//equipoprincipal
    return this.RegistroForm.get('equipoprincipal') as FormArray;
  }
  get licenciaEquiposHematologicos() {//equipoprincipal
    return this.RegistroForm.get('licenciaEquiposHematologicos') as FormArray;
  }
  ngOnInit(): void {
   
  
  }

  RegistroForm!: FormGroup;/* agregar codigo a lado de ItemName */
  constructor(private fb: FormBuilder,) {
    this.crearformulario();
  }

  crearformulario() {
    this.RegistroForm = this.fb.group({
      institucion: ['', [Validators.required]],
      codigo: ['', [Validators.required]],

      linkproceso: ['', [Validators.required]],
      tiempoconsumo: ['', [Validators.required]],
      determinacion: ['', [Validators.required]],
      presupuesto: ['', [Validators.required]],
      entregacarpeta: ['', [Validators.required]],
      terceraopcion: ['', [Validators.required]],
      sistema: ['', [Validators.required]],
      equipoprincipal:this.fb.array([])   ,
      observacion: ['', [Validators.required]],
      licenciaEquiposHematologicos: this.fb.array([])      
      })



  
  }

  agregarEquipo(): void {
    const equiposArray = this.RegistroForm.get('equipoprincipal') as FormArray;
    equiposArray.push(this.crearEquipoFormGroup());
  }

  crearEquipoFormGroup(): FormGroup {
    return this.fb.group({
      select: ['NO APLICA', Validators.required],
      input: ['', Validators.required]
    });
  }
 
  guardarRegistro() {
    if (this.RegistroForm.invalid) {
      return Object.values(this.RegistroForm.controls).forEach(control => {
        control.markAsTouched();
        console.log(control)
      })
    }
  }

  onCheckboxChange(e:any){
   
   const pruebasArray = this.RegistroForm.get('licenciaEquiposHematologicos') as FormArray;
  
  const valorinput= e.target.value;
  const checkbox = e.target;

 
if (checkbox.checked) {
  pruebasArray.push(this.fb.group({
    valorinput
  }));
} else {
  const index = pruebasArray.controls.findIndex(x => x.value === valorinput);
  console.log(index)
  pruebasArray.removeAt(index);
}
  }

}
