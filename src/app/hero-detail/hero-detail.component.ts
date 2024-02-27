import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common'; 
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  @Input() hero?: Hero;

  constructor(private route:ActivatedRoute, private heroService: HeroService, private location: Location ) {}

  ngOnInit():void{
    this.getHero();
  }
  
  getHero():void { 
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id !== null) {
      this.heroService.getHero(Number(id)).subscribe(hero => this.hero = hero);
    } else {
      // Handle the case when 'id' is null or not a valid number
      console.error("Invalid or missing 'id' parameter");
    }
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    } else {
      // Handle the case when 'hero' is undefined
      console.error("Cannot save undefined hero");
    }
  }
  
  goBack(): void { this.location.back(); }

}
